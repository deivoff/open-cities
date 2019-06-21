import Router, { RouterContext } from 'koa-router';
import setting from '../../configs/cite-config';

class OSRouterAbout {
  public router: Router;

  public constructor() {
    this.router = new Router();

    this.router.get('/about', async (ctx: RouterContext) => {
      return ctx.render('index', { title: setting.title, pageTitle: setting.pages.about });
    });
  }
}

export default new OSRouterAbout();
