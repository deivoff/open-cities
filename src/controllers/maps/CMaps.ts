import { RouterContext } from 'koa-router';
import mongoose, { Schema } from 'mongoose';
import { CitySchema } from './../../models/CitySchema';

const City = mongoose.model('city', CitySchema);

export class CMapsCity {
  public static async getCityMapsPage(ctx: RouterContext, options?: any, view: string = 'map') {
    const route = ctx.params.city;
    const cityDocument: any = await City.find({ route });
    const cityObj = cityDocument[0];
    const { name, coordinates } = cityObj;
    const city = name;
    const cityCenter = `${coordinates[0]}, ${coordinates[1]}`;
    options = {
      ...options,
      city,
      cityCenter,
    };
    return ctx.render(view, options);
  }
}
