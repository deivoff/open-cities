import { RouterContext } from 'koa-router';
import mongoose, { Schema } from 'mongoose';
import { CitySchema } from './../../models/CitySchema';

const City = mongoose.model('city', CitySchema);

export class CMapsCity {
  public static async getCityMapsList(ctx: RouterContext, options?: any, view: string = 'map') {
    const route = ctx.params.city;
    const city = await City.find({ route });
    options = {
      ...options,
      city,
    };
    return ctx.render(view, options);
  }
}
