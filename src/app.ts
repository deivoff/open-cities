import Koa from 'koa';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const koaBody = require('koa-body');

// db
import mongoose from 'mongoose';

// Pages and static
import views from 'koa-views';
import serve from 'koa-static';

// Routes
import routers from './routes/index';

class App {
  public app: Koa;
  public routers = routers;

  public constructor() {
    this.app = new Koa();
    this.config();

    this.routers.forEach(route => this.app.use(route.routes()));

    this.mongoSetup();
  }

  private config(): void {
    this.app
      .use(koaBody())
      .use(views(__dirname + '/views/', { extension: 'pug' }))
      .use(serve(__dirname + '/public/'));
  }

  private mongoSetup(): void {
    mongoose
      .connect('mongodb://localhost:27017/myos', { useNewUrlParser: true })
      .then((): void => console.log('MongoDB Connected'))
      .catch((err): void => console.log(err));
  }
}

export default new App().app;
