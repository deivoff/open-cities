import Koa from 'koa';
import { DecodedToken } from './components/auth';

type ContextState = {
  isAuth?: boolean,
  decodedUser?: DecodedToken
}

export type Context = Koa.ParameterizedContext<ContextState, {}>