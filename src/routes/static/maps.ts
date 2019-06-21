import Router, { RouterContext } from 'koa-router';
import setting from '../../configs/cite-config';

class OSRouterMaps {
  public router: Router;

  public constructor() {
    this.router = new Router();

    this.router.get('/maps', async (ctx: RouterContext) => {
      return ctx.render('index', { title: setting.title, pageTitle: setting.pages.maps });
    });

    this.router.get('/maps/:city', async (ctx: RouterContext) => {
      return ctx.render('map', {
        title: setting.title,
        pageTitle: setting.pages.maps,
        city: ctx.params.city,
      });
    });
  }
}

export default new OSRouterMaps();
