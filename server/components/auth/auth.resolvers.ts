import { Resolver, Query, Arg, Mutation, Ctx } from 'type-graphql'
import { AuthResponse, AuthRedirect } from '.';
import { Context } from 'koa';
import { UserModel, User } from '../user';
import {  } from './auth.types';
import { GoogleOAuth } from './auth.passport';

@Resolver(of => AuthResponse)
export class AuthResolvers {
  googleOAuth = new GoogleOAuth();

  @Query(returns => AuthRedirect)
  async getGoogleOAuthRedirect(): Promise<AuthRedirect> {
    return {
      url: this.googleOAuth.urlGoogle()
    }
  }

  @Mutation(returns => AuthResponse)
  async authGoogle(
    @Arg('accessToken') accessToken: string,
    @Ctx() { ctx }: Context
  ) /* : Promise<AuthResponse>  */{
    try {
      const data = await this.googleOAuth.serializeAccountFromCode(accessToken)
      return (data)!;
    } catch (error) {
      return error;
    }
  }
}