import mongoose from 'mongoose';

export interface ICitySchema {
  name?: string;
  url?: string;
  photo?: string;
}

export type ICityDocument = mongoose.Document & ICitySchema;
