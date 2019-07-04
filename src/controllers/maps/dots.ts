import { RouterContext } from 'koa-router';
import mongoose from 'mongoose';
import { DotSchema } from '../../models/DotSchemas';

const Dot = mongoose.model('dot', DotSchema);
export class DotsController {
  public static async getDots(ctx: RouterContext) {
    let { city, layer } = ctx.query;
    if (!city) {
      ctx.status = 404;
      ctx.message = 'City not found';
      return ctx;
    } else if (!layer) {
      ctx.status = 404;
      ctx.message = 'Polygon not detected';
      return ctx;
    } else {
      try {
        const response = await Dot.find(
          {
            city,
            layer,
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
