import { RouterContext } from 'koa-router';
import mongoose, { Schema } from 'mongoose';
import { CitySchema } from '../../models/CitySchema';
import { ICityDocument } from 'src/interfaces/ICity';

const City = mongoose.model('city', CitySchema);
const dotSchema = new Schema({
  type: String,
  geometry: {},
  properties: {},
});
const dotModel = mongoose.model('dot', dotSchema, `ekb_crime`);

export class MapsController {
  public static async getCityMapsPage(ctx: RouterContext, options?: any, view: string = 'map') {
    const { route } = ctx.params;

    try {
      const cityDocument: ICityDocument | null = await City.findOne({ route });

      if (!cityDocument) {
        options = {
          ...options,
          status: ctx.status = 404,
          statusMessage: 'Данного города пока у нас нет :(',
        };

        return ctx.render('error', options);
      } else {
        const { name, coordinates } = cityDocument;
        const cityCenter = coordinates ? `${coordinates[0]}, ${coordinates[1]}` : undefined;

        options = {
          ...options,
          city: name,
          cityCenter,
        };

        return ctx.render(view, options);
      }
    } catch (err) {
      console.error(err);
      options = {
        ...options,
        status: ctx.status = 500,
        statusMessage: 'Так, на сервере какая-то ошибка, уже чиним',
      };

      return ctx.render('error', options);
    }
  }

  public static async getCitiesList(ctx: RouterContext, options?: any, view: string = 'index') {
    const cities: ICityDocument[] = await City.find({});

    const citiesList = cities.map(cityDocument => {
      const { name, route } = cityDocument;
      const link = `${ctx.href}/${route}`;
      if (name) {
        return { name, link };
      }
    });

    options = {
      ...options,
      citiesList,
    };

    return ctx.render(view, options);
  }

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
        const response = await dotModel.find({
          geometry: {
            $geoWithin: {
              $box: [[polygon[0], polygon[1]], [polygon[2], polygon[3]]],
            },
          },
        });

        return (ctx.body = response);
      } catch (error) {
        return (ctx.body = error);
      }
    }
  }
}
