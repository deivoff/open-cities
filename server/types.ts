import Koa from 'koa';
import { DecodedToken } from './components/auth';

export type Context = Koa.Context & {
  state:  { 
    isAuth?: boolean 
    decodedUser?: DecodedToken 
  }
} 