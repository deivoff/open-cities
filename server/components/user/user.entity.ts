import {
  prop as Property,
  arrayProp as Properties,
  Typegoose,
  instanceMethod,
  InstanceType,
  ModelType,
  staticMethod
} from '@hasezoey/typegoose';
import jwt from 'jsonwebtoken';
import { Model, Document } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { ID } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { UserType } from '.';
import { AuthData } from '../auth';

@ObjectType()
export class UserPhoto extends Typegoose {
  @Field(() => String)
  @Property({ required: true })
  url!: string;
}

@ObjectType()
class GoogleProvider extends Typegoose {
  @Field()
  @Property({ required: true })
  id!: string;

  @Field()
  @Property({ required: true })
  token!: string;
}

@ObjectType()
class UserSocial extends Typegoose {
  @Field(() => GoogleProvider)
  @Property({ _id: false })
  googleProvider!: GoogleProvider;
}

@ObjectType()
export class UserName extends Typegoose {
  @Field(() => String)
  @Property({ required: true })
  familyName!: string;

  @Field(() => String)
  @Property({ required: true })
  givenName!: string;
}

@ObjectType()
export class User extends Typegoose {
  @Field(() => ID)
  readonly _id!: ObjectId;

  @Field()
  @Property({ required: true })
  email!: string;

  @Field(() => UserName)
  @Property({ _id: false })
  name!: UserName;

  @Field(type => UserType)
  @Property({ required: true, enum: UserType })
  role!: UserType;

  @Field(() => [UserPhoto])
  @Properties({ items: UserPhoto, _id: false })
  photos?: UserPhoto[];

  @Field(() => UserSocial)
  @Property({ _id: false })
  social!: UserSocial;

  @instanceMethod
  generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: expirationDate.getTime() / 1000,
    }, 'secret');
  }

  @staticMethod
  static async upsertGoogleUser({ accessToken, refreshToken, profile: { email, name, id, photo } }: AuthData) {
    try {
      console.log(id, email, 'static');
      const user = await UserModel.findOne({ 'social.googleProvider.id': id });
      
      if (!user) {
          const newUser = await UserModel.create({
              name,
              email,
              'social.googleProvider': {
                  id,
                  token: accessToken,
              },
              photos: [{ url: photo }],
              role: UserType.user,
          });
        
          return newUser;
      }
      return user;   
    } catch (error) {
      throw error;
    }
  }
}

export type UserDocument = User & Document;
export interface UserModel extends Model<UserDocument> {
  upsertGoogleUser: (data: AuthData) => Promise<UserDocument>,
  generateJWT: () => string;
};
export const UserModel: UserModel = new User().getModelForClass(User);
