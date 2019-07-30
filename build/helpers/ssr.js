"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const next_1 = __importDefault(require("next"));
// We love async builder functions
exports.setupSSR = async (app) => {
    // Setup Next.js
    const nextEngine = next_1.default({ dev: process.env.NODE_ENV !== 'production' });
    const handle = nextEngine.getRequestHandler();
    await nextEngine.prepare();
    // eslint-disable-next-line no-param-reassign
    app.context.render = async function render({ screen, props = {}, options }) {
        const ctx = this;
        // Here we take the React.js page and convert it to HTML in the server
        // After the browser downloads the JS files (from /_next/) React.js is re-hydrated
        // https://github.com/zeit/next.js/blob/canary/server/render.js
        const html = await nextEngine.renderToHTML(ctx.req, ctx.res, `/${screen}`, props, options);
        ctx.body = html;
    };
    const router = new koa_router_1.default();
    router.get('/_next/*', async (ctx) => {
        // Oops! we need this because Next.js sends the response prematurely
        ctx.respond = false;
        await handle(ctx.req, ctx.res);
    });
    app.use(router.routes());
    return app;
};
//# sourceMappingURL=ssr.js.map