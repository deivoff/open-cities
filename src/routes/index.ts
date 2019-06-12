import Router from 'koa-router';

const router = new Router();

router.get('/', async(ctx) => {
  return ctx.render('index');
})

export default router;