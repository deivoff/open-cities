import { RouterContext } from 'koa-router';
import mongoose, { Schema } from 'mongoose';
import { CitySchema } from '../../models/CitySchema';
import { ICityDocument } from 'src/interfaces/ICity';

const City = mongoose.model('city', CitySchema);

export class MapsController {
  public static async getCityMapsPage(ctx: RouterContext, options?: any, view: string = 'map') {
    const { route } = ctx.params;

    return await City.findOne({ route }, (err: Error, res: ICityDocument) => {
      if (err) {
        console.error(err);
        options = {
          ...options,
          status: ctx.status = 500,
          statusMessage: 'Так, на сервере какая-то ошибка, уже чиним',
        };

        return new Promise(ctx.render('error', options));
      } else if (res === null) {
        options = {
          ...options,
          status: ctx.status = 404,
          statusMessage: 'Данного города пока у нас нет :(',
        };

        return new Promise(ctx.render('error', options));
      } else {
        const { name, coordinates } = res;
        const cityCenter = coordinates ? `${coordinates[0]}, ${coordinates[1]}` : undefined;

        options = {
          ...options,
          city: name,
          cityCenter,
        };

        return new Promise(ctx.render(view, options));
      }
    });
  }
}
