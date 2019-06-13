import Koa from 'koa';
import koaBody from 'koa-body';
import views from 'koa-views';
import serve from 'koa-static';
import router from './routes';

class App {
  public app: Koa;
  public router = router;
  
  constructor() {
    this.app = new Koa();
    this.config();

    this.app
      .use(this.router.routes())
      .use(this.router.allowedMethods())      
  }

  private config(): void {
    this.app
      .use(koaBody())
      .use(views(__dirname + '/views/', { extension: 'pug' }))
      .use(serve(__dirname + '/public/'))
  }
}

export default new App().app;