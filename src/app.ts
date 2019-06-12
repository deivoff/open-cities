import Koa from 'koa';
import koaBody from 'koa-body';
import views from 'koa-views';
import router from './routes';

class App {
  public app: Koa;
  public router = router;
  
  constructor() {
    this.app = new Koa();
    this.config();

    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());
  }

  private config(): void {
    this.app.use(koaBody())
    this.app.use(views(__dirname + '/views/', {
      extension: 'pug'
    }))

    console.log(__dirname)
  }
}

export default new App().app;