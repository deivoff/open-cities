import Router from 'koa-router';
import OSRouterStatic from './static/index';
import OSRouterApi from './api/index';

class OSRoutes {
  public routers: Router[];

  public constructor() {
    this.routers = [OSRouterStatic, OSRouterApi].map(block => {
      return block.router;
    });

    this.routers.forEach(router => router.allowedMethods());
  }
}

export default new OSRoutes().routers;
