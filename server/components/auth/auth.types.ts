import { ObjectType, ID, Field, Int } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { UserName, UserPhoto } from '../user';

@ObjectType()
export class AuthResponse {
  @Field()
  token!: string;

  @Field(() => UserName)
  name!: UserName

  @Field(() => [UserPhoto])
  photos?: UserPhoto[]
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