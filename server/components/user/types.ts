import mongoose from 'mongoose';

export interface IUserNameSchema {
  familyName?: string;
  givenName?: string;
}

export interface IUserPhotoSchema {
  url?: string;
}
export interface IUserSchema {
  name?: IUserNameSchema;
  googleID?: string;
  photos?: IUserPhotoSchema[];
  role?: string;
}

export type IUserDocument = mongoose.Document & IUserSchema;

export const UserSchema = new mongoose.Schema<IUserSchema>({
  name: {
    familyName: String,
    givenName: String
  },
  googleID: String,
  role: String,
  photos: [
    {
      url: String
    }
  ]
});

// eslint-disable-next-line import/no-mutable-exports
let UserModel: mongoose.Model<IUserDocument>;

try {
  UserModel = mongoose.model<IUserDocument>('User', UserSchema);
} catch (e) {
  UserModel = mongoose.model<IUserDocument>('User');
}

export default UserModel;
