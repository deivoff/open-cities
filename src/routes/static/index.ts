import Router, { RouterContext } from 'koa-router';
import setting from '../../configs/cite-config';

class OSRouterIndex {
  public router: Router;

  public constructor() {
    this.router = new Router();

    this.router.get('/', async (ctx: RouterContext) => {
      return ctx.render('index', { title: setting.title, pageTitle: setting.pages.index });
    });
  }
}

export default new OSRouterIndex();
