import jwt from 'jsonwebtoken';
import path from'path';
import { Context } from './../../types';
import { DecodedToken } from './../../components/auth';

require('dotenv').config({path: path.join(__dirname + './../../../.env')});

export const isAuth = async (ctx: Context, next: () => Promise<any>) => {
  const authHeader = ctx.header['authorization'];
  if (!authHeader) {
    ctx.state.isAuth = false;
    return (await next());
  }

  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    ctx.state.isAuth = false;
    return (await next());
  }
  let decodedToken: string | object;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY!);
  } catch {
    ctx.state.isAuth = false;
    return (await next());
  }

  if (!decodedToken) {
    ctx.state.isAuth = false;
    return (await next());
  }

  ctx.state.isAuth = true;
  ctx.state.decodedUser = decodedToken as DecodedToken;
  return(await next());
};

export const checkAuth = (ctx: Context) => {
  if (!ctx.state.isAuth) {
    throw new Error('Unauthenticated');
  }
};
