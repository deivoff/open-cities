import mongoose from 'mongoose';
import { Geometry, GeoJsonProperties } from 'geojson';

export type IGeometrySchema = Geometry & {
  style?: string
};

export interface IGeoSchema {
  city?: string;
  access?: 0 | 1 | 2;
  author?: string;
  date?: Date;
  last_modified?: Date;
  properties?: GeoJsonProperties;
  geometry?: IGeometrySchema;
}

export type IGeoDocument = mongoose.Document & IGeoSchema;
