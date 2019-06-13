import Router from 'koa-router';

class OSRoutes {
  public router: Router;

  constructor() {
    this.router = new Router();

    this.router
      .get('/', async(ctx) => {
        return ctx.render('index', {
          title: 'Открытые города',
          pageTitle: 'Главная',
        });
      })
      .get('/maps', async(ctx) => {
        return ctx.render('index', {
          title: 'Открытые города',
          pageTitle: 'Карты'
        });
      })
      .get('/news', async(ctx) => {
        return ctx.render('index', {
          title: 'Открытые города',
          pageTitle: 'Статьи'
        });
      })
      .get('/about', async(ctx) => {
        return ctx.render('index', {
          title: 'Открытые города',
          pageTitle: 'О нас'
        });
      })
  }
}

export default new OSRoutes().router;