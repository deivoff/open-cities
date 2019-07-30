import Router from 'koa-router';

export const createRouter = async () => {
  const router = new Router();

  // View endpoints
  router.get('/', async (ctx: any) => {
    // You can `await` or `return` the ctx.render function call
    await ctx.render({
      screen: 'home'
    });
  });

  router.get('/comments', async (ctx: any) => {
    const comments = ctx.session.comments || [];
    return ctx.render({
      screen: 'comments',
      props: {
        comments
      }
    });
  });

  // API endpoints
  router.get('/api/comments', async (ctx: any) => {
    ctx.session.comments = ctx.session.comments || [];
    ctx.body = ctx.session.comments;
  });

  router.post('/api/comments', async (ctx: any) => {
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
