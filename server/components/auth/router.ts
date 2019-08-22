import Router, { RouterContext } from 'koa-router';
import passport from 'koa-passport';

require('./passport-setup');

export const createAuthRouter = () => {
  const router = new Router({
    prefix: '/auth'
  });

  // Auth endpoints
  router.get('/login', async (ctx: RouterContext) => {
    await (ctx.body = 'login');
  });

  router.get('/logout', async (ctx: RouterContext) => {
    if (ctx.isAuthenticated()) {
      ctx.logout();
      await ctx.redirect('back');
    } else {
      await ctx.redirect('back');
    }
  });

  router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile']
    })
  );

  router.get(
    '/google/redirect',
    passport.authenticate('google'),
    async (ctx: RouterContext) => {
      await ctx.redirect('back');
    }
  );

  return router;
};
