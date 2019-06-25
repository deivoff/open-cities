import { RouterContext } from 'koa-router';

export const staticController = (ctx: RouterContext, options?: any, view: string = 'index') => {
  return ctx.render(view, options);
};
