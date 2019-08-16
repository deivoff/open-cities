import mongoose from 'mongoose';

export interface IUserSchema {
  userName?: string;
  role?: string;
}

export type IUserDocument = mongoose.Document & IUserSchema;
