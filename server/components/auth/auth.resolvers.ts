import { Resolver, Query, Arg, Mutation, Ctx } from 'type-graphql'
import { AuthResponse, AuthRedirect } from '.';
import { Context } from 'koa';
import { GoogleOAuth } from './google';

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
    @Arg('code') code: string,
    @Ctx() { ctx }: Context
  ) /* : Promise<AuthResponse>  */{
    try {
      const data = await this.googleOAuth.serializeAccountFromCode(code)
      return (data)!;
    } catch (error) {
      return error;
    }
  }
}