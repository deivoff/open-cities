import { RouterContext } from 'koa-router';
import mongoose from 'mongoose';
import { GeoSchema } from '../../models/GeoSchemas';
import { IGeoDocument } from '@interfaces/IGeo';

const Dot = mongoose.model('dot', GeoSchema, 'dots');
const Polygon = mongoose.model('polygon', GeoSchema, 'polygons');

class GeoController {
  public async getGeoJson(ctx: RouterContext) {
    let { city, layer, type } = ctx.query;
    if (!city) {
      ctx.status = 404;
      ctx.message = 'City not found';
      return ctx;
    } else if (!layer) {
      ctx.status = 404;
      ctx.message = 'Layer not detected';
      return ctx;
    } else if (!type) {
      ctx.status = 404;
      ctx.message = 'Geo Type is not defined';
    } else {
      try {
        const response = await this.switchRequestGeoType({ type, city, layer });
        return (ctx.body = response);
      } catch (error) {
        return (ctx.body = error);
      }
    }
  }

  private async switchRequestGeoType({ type, layer, city }) {
    switch (type) {
      case 'Polygon':
        {
          const polygons: any[] = await Polygon.find(
            {
              city,
              layer,
              'geometry.type': type,
            },
            {
              _id: 0,
              city: 0,
              layer: 0,
            },
          );

          if (polygons.length && layer === 'district') {
            const promises = await Promise.all(
              polygons.map(async (elem: IGeoDocument) => {
                elem.properties.common = await Dot.aggregate([
                  {
                    $match: {
                      layer: 'buildings',
                      /* geometry: {
                      $geoWithin: {
                        $polygon: elem.geometry.coordinates,
                      }
                    } */
                    },
                  },
                  {
                    $group: {
                      _id: 'Sum',
                      square: {
                        $sum: {
                          $convert: {
                            input: '$properties.square',
                            to: 'double',
                            onError: 0,
                            onNull: 0,
                          },
                        },
                      },
                    },
                  },
                ]);
                return elem;
              }),
            );
            return await promises;
          }
        }
        break;
      default:
        return await Dot.find(
          {
            city,
            layer,
            'geometry.type': type,
          },
          {
            _id: 0,
            city: 0,
            layer: 0,
          },
        );
    }
  }
}

export default new GeoController();
