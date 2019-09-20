import { Resolver, Query, Arg, Mutation, Ctx } from 'type-graphql'
import { AuthResponse, AuthRedirect } from '.';
import { Context } from 'koa';
import { UserModel } from '../user';
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
  ) {
    try {
      const account = await this.googleOAuth.getGoogleAccountFromCode(accessToken);
      console.log(account);
      /* const { req, res } = ctx;
      // data contains the accessToken, refreshToken and profile from passport
      req.body = {
        ...req.body,
        access_token: accessToken,
      };
      const next = (...args) => console.log(args);
      const { data, info } = await authenticateGoogle(ctx, next);
      if (data) {
        const user = await UserModel.upsertGoogleUser(data);

        if (user) {
          const { _id, email} = user;
          return ({
            _id,
            email,
            token: user.generateJWT(),
          });
        }
      }

      if (info) {
        console.log(info);
        switch (info.code) {
          case 'ETIMEDOUT':
            return (new Error('Failed to reach Google: Try Again'));
          default:
            return (new Error('something went wrong'));
        }
      }
      return (Error('server error')); */
    } catch (error) {
      return error;
    }
  }
}