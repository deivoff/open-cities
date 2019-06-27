import Router, { RouterContext } from 'koa-router';
import setting from './../../configs/cite-config';
import { staticController } from './../../controllers/static/staticController';
import { MapsController } from '../../controllers/maps/maps';

class OSRouterIndex {
  public router: Router;

  public constructor() {
    this.router = new Router();

    this.router
      .get('/', async (ctx: RouterContext) => {
        await staticController(ctx, { title: setting.title, pageTitle: setting.pages.index });
      })
      .get('/about', async (ctx: RouterContext) => {
        await staticController(ctx, { title: setting.title, pageTitle: setting.pages.about });
      })
      .get('/news', async (ctx: RouterContext) => {
        await staticController(ctx, { title: setting.title, pageTitle: setting.pages.news });
      })
      .get('/maps', async (ctx: RouterContext) => {
        await MapsController.getCitiesList(ctx, { title: setting.title, pageTitle: setting.pages.maps });
      })
      .get('/maps/:route', async (ctx: RouterContext) => {
        await MapsController.getCityMapsPage(ctx, { title: setting.title });
      });
  }
}

export default new OSRouterIndex();
