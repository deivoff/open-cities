import path from 'path';
import { AuthData } from '.';
import { google, plus_v1 } from 'googleapis';
import { OAuth2Client } from 'googleapis-common';
import { Context } from 'koa';

require('dotenv').config({path: path.join(__dirname + './../../../.env')});



export class GoogleOAuth {
  /*******************/
  /** CONFIGURATION **/
  /*******************/

  googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID!, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // e.g. _ASDFA%DFASDFASDFASD#FAD-
    redirectUrl: process.env.GOOGLE_REDIRECT_URL
  };

  defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ];


  /*************/
  /** HELPERS **/
  /*************/

  auth = new google.auth.OAuth2(
      this.googleConfig.clientId,
      this.googleConfig.clientSecret,
      this.googleConfig.redirectUrl
  );

  getConnectionUrl(): string {
    return this.auth.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: this.defaultScope
    });
  }

  getGooglePlusApi(): plus_v1.Plus {
    return google.plus({ version: 'v1', auth: this.auth });
  }

  urlGoogle() {
    const url = this.getConnectionUrl();
    return url;
  }

  async getGoogleAccountFromCode(code: string) {
    try {
      const data = await this.auth.getToken(code);
      console.log('data', data)
      const tokens = data.tokens;
      this.auth.setCredentials(tokens);
      const plus = this.getGooglePlusApi();
      console.log(plus)
      const me = await plus.people.get({ userId: 'me' });
      console.log(me);
      const userGoogleId = me.data.id;
      const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
      return {
        id: userGoogleId,
        email: userGoogleEmail,
        tokens: tokens,
      };
    } catch (error) {
      throw error
    }
  }
}

/**********/
/** MAIN **/
/**********/

/**
 * Part 1: Create a Google URL and send to the client to log in the user.
 */

/**
 * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
 */



/* export const GoogleTokenStrategyCallback = (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken, profile);
  return done(null, {
  
  accessToken,
  refreshToken,
  profile,
})
};

passport.use(new GoogleTokenStrategy({
  clientID: process.env.GOOGlE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
}, GoogleTokenStrategyCallback));

export const authenticateGoogle = (ctx, next) => new Promise<{ data: AuthData, info: any}>((resolve, reject) => {
  passport.authenticate('google-token', { session: false }, (err, data: AuthData, info) => {
      if (err) reject(err);
      resolve({ data, info });
  })(ctx, next)
}); */