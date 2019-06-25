import Router, { RouterContext } from 'koa-router';
import setting from './../../configs/cite-config';
import { staticController } from './../../controllers/static/staticController';
import { CMapsCity } from './../../controllers/maps/CMaps';

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
        await staticController(ctx, { title: setting.title, pageTitle: setting.pages.maps }, 'map');
      })
      .get('/maps/:city', async (ctx: RouterContext) => {
        await CMapsCity.getCityMapsList(ctx, { title: setting.title });
      });
  }
}

export default new OSRouterIndex();
