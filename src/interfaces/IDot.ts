import { Document } from 'mongoose';

export interface IDotSchema {
  type: string;
  geometry: {};
  properties: {};
}

export type IDotDocument = Document & IDotSchema;
