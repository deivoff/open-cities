import { Document } from 'mongoose';

export interface IGeoSchema {
  type: string;
  geometry: any;
  properties: any;
}

export type IGeoDocument = Document & IGeoSchema;
