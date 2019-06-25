import { RouterContext } from 'koa-router';
import mongoose, { Schema } from 'mongoose';
import { CitySchema } from './../../models/CitySchema';

const City = mongoose.model('city', CitySchema);

export class CMapsCity {
  public static async getCityMapsList(ctx: RouterContext, options?: any, view: string = 'map') {
    const route = ctx.params.city;
    const cityDocument: any = await City.find({ route });
    const cityObj = cityDocument[0];
    const { name } = cityObj;
    const city = name;
    options = {
      ...options,
      city,
    };
    console.log(options, name);
    return ctx.render(view, options);
  }
}
