import Router, { RouterContext } from 'koa-router';

export const createPagesRouter = () => {
  const router = new Router();

  // View endpoints
  router.get('/', async (ctx: RouterContext) => {
    // You can `await` or `return` the ctx.render function call
    await ctx.render({
      screen: 'index'
    });
  });

  router.get('/cities/:city', async (ctx: RouterContext) => {
    const { city } = ctx.params;
    return ctx.render({
      screen: 'city',
      props: {
        city: {
          url: city
        }
      }
    });
  });

  router.get('/maps', async (ctx: RouterContext) => {
    return ctx.render({
      screen: 'maps'
    });
  });

  return router;
};
