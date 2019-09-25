import 'reflect-metadata';
import path from 'path';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import logger from 'koa-logger';
import { ApolloServer } from 'apollo-server-koa';
import mongoose from 'mongoose';
import { buildSchema } from 'type-graphql';
import { UserResolvers } from './components/user';
import { CityResolvers } from './components/city';
import { GeoResolvers } from './components/geo';
import { LayerResolvers } from './components/layer';
import { AuthResolvers } from './components/auth';
import cors from '@koa/cors';

import bodyParser from 'koa-bodyparser';
import { oauthHandler } from './helpers';
import { isAuth } from './middleware/auth';
import { Context } from './types';

const config = require('dotenv').config({path: path.join(__dirname + './../.env')});

export const createApp = async () => {
  const app = new Koa();
  const router = new KoaRouter();

  // OAUTH
  router.get('/oauth/*', oauthHandler);


  const schema = await buildSchema({
    resolvers: [
      UserResolvers, 
      CityResolvers, 
      GeoResolvers, 
      LayerResolvers, 
      AuthResolvers
    ],
    emitSchemaFile: true,
    validate: false
  });

  // Add middleware
  app.use(cors({
    origin: '*',
    credentials: true,
    allowMethods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Content-Length', 'Authorization', 'Accept', 'X-Requested-With', 'x-access-token']
  }))
  app.use(bodyParser());
  app.use(logger());
  app.use(isAuth)

  const server = new ApolloServer({
    schema,
    context: (ctx: Context) => ctx,
    playground: true,
    introspection: true
  });
  app.use(router.routes());
  app.use(router.allowedMethods());

  server.applyMiddleware({ app, path: '/graphql' })

  try {
    await mongoose.connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true,
      dbName: `${process.env.DB_NAME}`,
      useUnifiedTopology: true
    });
    process.env.NODE_ENV === ('development' || 'test') && mongoose.set('debug', true);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }

  return app;
}