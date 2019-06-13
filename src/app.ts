import Koa from 'koa';
import koaBody from 'koa-body';

// db
import mongoose from 'mongoose';

// Pages and static
import views from 'koa-views';
import serve from 'koa-static';

// Routes
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
      
    this.mongoSetup();
  }

  private config(): void {
    this.app
      .use(koaBody())
      .use(views(__dirname + '/views/', { extension: 'pug' }))
      .use(serve(__dirname + '/public/'))
  }

  private mongoSetup(): void {
    mongoose.connect('mongodb://localhost:27017/myos', {useNewUrlParser: true})
      .then(() => console.log('MongoDB Connected'))
      .catch((err) => console.log(err));
  }
}

export default new App().app;