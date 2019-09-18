import 'reflect-metadata';
import path from 'path';
import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import koaRouter from 'koa-router';
import logger from 'koa-logger';
import { ApolloServer } from 'apollo-server-koa';
import mongoose from 'mongoose';
import { buildSchema } from 'type-graphql';
import { UserResolvers } from './components/user';
import { CityResolvers } from './components/city';
import { GeoResolvers } from './components/geo';
import { LayerResolvers } from './components/layer';


export const createApp = async () => {
  const config = await require('dotenv').config({path: path.join(__dirname + './../.env')});
  const app = new Koa();
  const router = new koaRouter();
  const schema = await buildSchema({
    resolvers: [UserResolvers, CityResolvers, GeoResolvers, LayerResolvers],
    emitSchemaFile: true,
    validate: false
  });

  // Add middleware
  app.use(logger());
  app.use(koaBody());


  const server = new ApolloServer({
    schema,
    context: (ctx) => ctx,
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
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }

  return app;
}