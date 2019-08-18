import Router from 'koa-router';
import Koa from 'koa';
import nextjs from 'next';

interface IRender {
  screen?: string;
  props?: any;
  options?: any;
}

// We love async builder functions
export const setupSSR = async (app: Koa) => {
  // Setup Next.js
  const nextEngine = nextjs({ dev: process.env.NODE_ENV !== 'production' });
  const handle = nextEngine.getRequestHandler();
  await nextEngine.prepare();

  // eslint-disable-next-line no-param-reassign
  app.context.render = async function render({
    screen,
    props = {},
    options
  }: IRender) {
    const ctx = this;
    // console.log('ctx', ctx.res, ctx.req.user);
    // Here we take the React.js page and convert it to HTML in the server
    // After the browser downloads the JS files (from /_next/) React.js is re-hydrated

    // https://github.com/zeit/next.js/blob/canary/server/render.js
    const html = await nextEngine.renderToHTML(
      ctx.req,
      ctx.res,
      `/${screen}`,
      props,
      options
    );
    ctx.body = html;
  };

  const router = new Router();

  router.get('/_next/*', async ctx => {
    // Oops! we need this because Next.js sends the response prematurely
    ctx.respond = false;
    await handle(ctx.req, ctx.res);
  });

  app.use(router.routes());

  return app;
};
