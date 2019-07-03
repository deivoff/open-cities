import Router, { RouterContext } from 'koa-router';
import { DotsController } from '../../controllers/maps/dots';

class OSRouterApi {
  public router: Router;

  public constructor() {
    this.router = new Router({ prefix: '/api' });

    this.router.get('/dots', async (ctx: RouterContext) => {
      await DotsController.getDots(ctx);
    });
  }
}

export default new OSRouterApi();
