import { registerEnumType } from 'type-graphql';

export enum GeometryType {
  Point = 'Point',
  MultiPoint = 'MultiPoint',
  LineString = 'LineString',
  MultiLineString = 'MultiLineString',
  Polygon = 'Polygon',
  MultiPolygon = 'MultiPolygon',
}

registerEnumType(GeometryType, {
  name: 'GeometryType', // this one is mandatory
});
