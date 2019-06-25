import { Schema } from 'mongoose';

export const CitySchema = new Schema({
  name: {
    type: String,
    required: 'Необходимо задать название города!',
  },
  route: String,
});
