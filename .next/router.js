"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
exports.createRouter = async () => {
    const router = new koa_router_1.default();
    // View endpoints
    router.get('/', async (ctx) => {
        // You can `await` or `return` the ctx.render function call
        await ctx.render({
            screen: 'home'
        });
    });
    router.get('/comments', async (ctx) => {
        const comments = ctx.session.comments || [];
        return ctx.render({
            screen: 'comments',
            props: {
                comments
            }
        });
    });
    // API endpoints
    router.get('/api/comments', async (ctx) => {
        ctx.session.comments = ctx.session.comments || [];
        ctx.body = ctx.session.comments;
    });
    router.post('/api/comments', async (ctx) => {
        ctx.session.comments = ctx.session.comments || [];
        const comment = {
            date: new Date(),
            comment: ctx.request.body['comment']
        };
        ctx.session.comments.push(comment);
        ctx.status = 201;
        ctx.body = comment;
    });
    return router;
};
//# sourceMappingURL=router.js.map