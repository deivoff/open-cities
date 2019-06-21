import Router, { RouterContext } from 'koa-router';
import setting from '../../configs/cite-config';

class OSRouterNews {
  public router: Router;

  public constructor() {
    this.router = new Router();

    this.router.get('/news', async (ctx: RouterContext) => {
      return ctx.render('index', { title: setting.title, pageTitle: setting.pages.news });
    });
  }
}

export default new OSRouterNews();
