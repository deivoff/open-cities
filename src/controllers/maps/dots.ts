import { RouterContext } from 'koa-router';
import mongoose from 'mongoose';
import { DotSchema } from '../../models/DotSchemas';

const Dot = mongoose.model('dot', DotSchema);
export class DotsController {
  public static async getDots(ctx: RouterContext) {
    let { city, polygon } = ctx.query;
    if (!city) {
      ctx.status = 404;
      ctx.message = 'City not found';
      return ctx;
    } else if (!polygon) {
      ctx.status = 404;
      ctx.message = 'Polygon not detected';
      return ctx;
    } else {
      try {
        polygon = polygon.split(',').map(el => parseFloat(el));
        const response = await Dot.find(
          {
            city,
            geometry: {
              $geoWithin: {
                $box: [[polygon[0], polygon[1]], [polygon[2], polygon[3]]],
              },
            },
          },
          {
            _id: 0,
            city: 0,
            layer: 0,
          },
        );

        return (ctx.body = response);
      } catch (error) {
        return (ctx.body = error);
      }
    }
  }
}
