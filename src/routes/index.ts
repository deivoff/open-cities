import Router from 'koa-router';
import OSRouterIndex from './static/index';

class OSRoutes {
  public routers: Router[];

  public constructor() {
    this.routers = [OSRouterIndex].map(block => {
      return block.router;
    });

    this.routers.forEach(router => router.allowedMethods());
  }
}

export default new OSRoutes().routers;
