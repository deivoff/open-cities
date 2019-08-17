import Router from 'koa-router';
import { createPagesRouter } from './components/pages/router';
import { createAuthRouter } from './components/auth/router';

export const createRouters = async () => {
  const routers: Router[] = [
    createPagesRouter,
    createAuthRouter,
  ].map((createRouter: any) => {
    return createRouter();
  })

  /* router.get('/comments', async (ctx: any) => {
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
 */
  return routers;
};
