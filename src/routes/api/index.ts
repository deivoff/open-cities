import Router, { RouterContext } from 'koa-router';
import { MapsController } from '../../controllers/maps/maps';

class OSRouterApi {
  public router: Router;

  public constructor() {
    this.router = new Router({ prefix: '/api' });

    this.router.get('/maps/dots', async (ctx: RouterContext) => {
      await MapsController.getDots(ctx);
    });
  }
}

export default new OSRouterApi();
