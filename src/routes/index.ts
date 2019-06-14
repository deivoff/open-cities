import Router from 'koa-router';

class OSRoutes {
  public router: Router;
  public PAGE_CONFIG = {
    title: 'Открытые города',
    mainPage: {
      title: 'Главная',
    },
    mapPage: {
      title: 'Карты',
    },
    newsPage: {
      title: 'Статьи',
    },
    aboutPage: {
      title: 'О нас',
    },
  };

  public constructor() {
    this.router = new Router();

    this.router
      .get('/', async ctx =>
        ctx.render('index', { title: this.PAGE_CONFIG.title, pageTitle: this.PAGE_CONFIG.mainPage.title }),
      )
      .get('/maps', async ctx =>
        ctx.render('index', { title: this.PAGE_CONFIG.title, pageTitle: this.PAGE_CONFIG.mapPage.title }),
      )
      .get('/about', async ctx =>
        ctx.render('index', { title: this.PAGE_CONFIG.title, pageTitle: this.PAGE_CONFIG.aboutPage.title }),
      )
      .get('/news', async ctx =>
        ctx.render('index', { title: this.PAGE_CONFIG.title, pageTitle: this.PAGE_CONFIG.newsPage.title }),
      );
  }
}

export default new OSRoutes().router;
