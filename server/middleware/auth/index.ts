import jwt from 'jsonwebtoken';
import path from'path';
import { Context } from './../../types';

require('dotenv').config({path: path.join(__dirname + './../../../.env')});

export const isAuth = (ctx: Context, next: () => Promise<any>) => {
  const authHeader = ctx.header['authorization'];
  if (!authHeader) {
    ctx.state.isAuth = false;
    return next();
  }

  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    ctx.state.isAuth = false;
    return next();
  }
  let decodedToken: string | object;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY!);
  } catch {
    ctx.state.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    ctx.state.isAuth = false;
    return next();
  }

  ctx.state.isAuth = true;
  ctx.state.decodedUser = decodedToken;
  next();
};

export const checkAuth = (ctx: Context) => {
  if (!ctx.state.isAuth) {
    throw new Error('Unauthenticated');
  }
};
