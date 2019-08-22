import mongoose, { Schema } from 'mongoose';

export interface IMapSchema {
  author?: string;
  subauthors?: string[];
  geo_settings?: any;
  constants?: any;
  name?: string;
  date?: Date;
  last_modified?: Date;
  description?: string;
  tags?: string[];
  draft?: boolean;
  access?: number;
}

export type IMapDocument = mongoose.Document & IMapSchema;

export const CitySchema = new mongoose.Schema<IMapSchema>({
  name: {
    type: String,
    required: 'Необходимо задать название карты!'
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  subauthors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  geo_settings: {},
  constants: {},
  date: Date,
  last_modified: Date,
  description: String,
  tags: [String],
  draft: Boolean,
  access: Number
});

// eslint-disable-next-line import/no-mutable-exports
let MapModel: mongoose.Model<IMapDocument>;

try {
  MapModel = mongoose.model<IMapDocument>('Map', CitySchema);
} catch (e) {
  MapModel = mongoose.model<IMapDocument>('Map');
}

export default MapModel;
