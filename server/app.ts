/* eslint-disable no-console */
import assert from 'assert';
import path from 'path';
import Koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import mongoose from 'mongoose';

import { setupSSR } from './helpers/ssr';
import { createRouter } from './router';

require('dotenv').config({ path: path.join(`${__dirname}./../.env`) });

export const createApp = async () => {
  const app = new Koa();

  // Add some assertions required in a production environment
  if (process.env.NODE_ENV === 'production') {
    assert(process.env.SECRET_KEY, 'Please set SECRET_KEY env variable.');
  }
  app.keys = [process.env.SECRET_KEY || 'SECRET_KEY'];

  await setupSSR(app);

  // Add middleware
  app.use(logger());
  app.use(bodyParser());
  app.use(statics(path.join(__dirname, '..', 'public')));
  app.use(session({}, app));

  // TODO: Error handling

  // Add routes
  const router = await createRouter();
  app.use(router.routes());

  // Add database
  try {
    await mongoose.connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }

  return app;
};
