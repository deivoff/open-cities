import Router, { RouterContext } from 'koa-router';
import GeoController from '../../controllers/maps/geo';

class OSRouterApi {
  public router: Router;

  public constructor() {
    this.router = new Router({ prefix: '/api' });

    this.router.get('/geo', async (ctx: RouterContext) => {
      await GeoController.getGeoJson(ctx);
    });
  }
}

export default new OSRouterApi();
