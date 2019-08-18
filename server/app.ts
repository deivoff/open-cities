/* eslint-disable no-console */
import assert from 'assert';
import path from 'path';
import Koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import statics from 'koa-static';
import mongoose from 'mongoose';
import passport from 'koa-passport';

import { setupSSR } from './helpers/ssr';
import { createRouters } from './routers';

require('dotenv').config({ path: path.join(`${__dirname}./../.env`) });

export const createApp = async () => {
  const app = new Koa();

  // Add some assertions required in a production environment
  if (process.env.NODE_ENV === 'production') {
    assert(process.env.SECRET_KEY, 'Please set SECRET_KEY env variable.');
  }
  app.keys = [process.env.SECRET_KEY || 'SECRET_KEY'];

  // Add middleware
  app.use(logger());
  app.use(bodyParser());
  app.use(statics(path.join(__dirname, '..', 'public')));
  app.use(
    session(
      {
        maxAge: 24 * 60 * 60 * 1000
      },
      app
    )
  );

  // Add passport
  app.use(passport.initialize());
  app.use(passport.session());

  await setupSSR(app);
  // TODO: Error handling

  // Add routes
  const routers = await createRouters();
  routers.forEach((router: Router) => app.use(router.routes()));

  // Add database
  try {
    await mongoose.connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true,
      dbName: `${process.env.DB_NAME}`
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }

  return app;
};
