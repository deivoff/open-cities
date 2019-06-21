/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Router from 'koa-router';
import OSRouterIndex from './static/index';
import OSRouterAbout from './static/about';
import OSRouterMaps from './static/maps';
import OSRouterNews from './static/news';

class OSRoutes {
  public routers: Router[];

  public constructor() {
    this.routers = [OSRouterIndex, OSRouterAbout, OSRouterNews, OSRouterMaps].map(block => {
      return block.router;
    });

    this.routers.forEach(router => router.allowedMethods());
  }
}

export default new OSRoutes().routers;
