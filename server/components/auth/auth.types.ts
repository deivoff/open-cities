import { ObjectType, ID, Field, Int } from 'type-graphql';
import { ObjectId } from 'mongodb';

@ObjectType()
export class AuthResponse {
  @Field(() => ID)
  _id!: ObjectId;

  @Field()
  token!: string;

  @Field()
  email!: string;
}

@ObjectType()
export class AuthRedirect {
  @Field()
  url!: string;
}

export interface AuthData {
  accessToken: string;
  refreshToken: string;
  profile: any;
}