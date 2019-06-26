/* eslint-disable @typescript-eslint/no-var-requires */
import Koa from 'koa';
const koaBody = require('koa-body');

// db
import mongoose from 'mongoose';
require('dotenv').config();

// Pages, static, favicon
import views from 'koa-views';
import serve from 'koa-static';
const favicon = require('koa-favicon');

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
      .use(favicon(__dirname + '/public/favicon.ico'))
      .use(serve(__dirname + '/public/'));
  }

  private mongoSetup(): void {
    mongoose
      .connect(`mongodb+srv://user12:jpfeaW8NUVSXb6f@opeb-cities-ffxwj.mongodb.net/myos?retryWrites=true&w=majority`, { useNewUrlParser: true })
      .then((): void => console.log('MongoDB Connected'))
      .catch((err): void => console.log(err));
  }
}

export default new App().app;
