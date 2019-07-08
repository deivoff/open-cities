import { Schema } from 'mongoose';

export const GeoSchema = new Schema({
  type: String,
  geometry: {},
  properties: {},
  city: String,
  layer: String,
});
