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
class UserPhoto extends Typegoose {
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
  @Property()
  googleProvider!: GoogleProvider;
}

@ObjectType()
class UserName extends Typegoose {
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
  @Property()
  name!: UserName;

  @Field(type => UserType)
  @Property({ required: true, enum: UserType })
  role!: UserType;

  @Field(() => [UserPhoto])
  @Properties({ items: UserPhoto })
  photos?: UserPhoto[];

  @Field(() => UserSocial)
  @Property()
  social!: UserSocial;

  @instanceMethod
  generateJWT(this: InstanceType<User>) {
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
  async upsertGoogleUser(this: ModelType<User> & typeof User, { accessToken, refreshToken, profile }: AuthData) {
    const { emails, familyName, givenName, id } = profile;
    const user = await UserModel.findOne({ 'social.googleProvider.id': id });

    // no user was found, lets create a new one
    if (!user) {
        const newUser = await UserModel.create({
            name: {
              familyName,
              givenName
            },
            email: emails[0].value,
            'social.googleProvider': {
                id: profile.id,
                token: accessToken,
            },
            role: UserType.user,
        });

        return newUser;
    }
    return user;
  }
}

export type UserDocument = User & Document;
export interface UserModel extends Model<UserDocument> {
  upsertGoogleUser: (data: AuthData) => Promise<UserDocument>,
  generateJWT: () => string;
};
export const UserModel: UserModel = new User().getModelForClass(User);
