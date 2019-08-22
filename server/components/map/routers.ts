import Router, { RouterContext } from 'koa-router';

export const mapsPrivateRouters = () => {
  const router = new Router();


  router.get('/get-maps', async (ctx: RouterContext) => {
    if (ctx.isAuthenticated()) {
      
    }
  }) 
}