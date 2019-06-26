import { Document } from 'mongoose';

export interface ICitySchema {
  name?: string;
  route?: string;
  coordinates?: [number, number];
}

export type ICityDocument = Document & ICitySchema;
