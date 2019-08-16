import mongoose from 'mongoose';

export interface ICitySchema {
  name?: string;
  url?: string;
  photo?: string;
}

export type ICityDocument = mongoose.Document & ICitySchema;

export const CitySchema = new mongoose.Schema<ICitySchema>({
  name: {
    type: String,
    required: 'Необходимо задать название города!'
  },
  url: String,
  photo: String
});

// eslint-disable-next-line import/no-mutable-exports
let CityModel: mongoose.Model<ICityDocument>;

try {
  CityModel = mongoose.model<ICityDocument>('City', CitySchema);
} catch (e) {
  CityModel = mongoose.model<ICityDocument>('City');
}

export default CityModel;
