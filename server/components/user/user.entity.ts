import {
  prop as Property,
  arrayProp as Properties,
  Typegoose
} from '@hasezoey/typegoose';
import { Model, Document } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { ID } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { UserType } from '.';

@ObjectType()
class UserPhoto extends Typegoose {
  @Field(() => String)
  @Property({ required: true })
  url!: string;
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

  @Field(() => UserName)
  @Property()
  name!: UserName;

  @Property({ required: true })
  googleID!: string;

  @Field(type => UserType)
  @Property({ required: true, enum: UserType })
  role!: UserType;

  @Field(() => [UserPhoto])
  @Properties({ items: UserPhoto })
  photos?: UserPhoto[];
}

export type UserDocument = User & Document;
export type UserModel = Model<UserDocument>;
export const UserModel: UserModel = new User().getModelForClass(User);
