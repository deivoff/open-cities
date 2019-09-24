import path from 'path';
import { google, plus_v1 } from 'googleapis';

require('dotenv').config({path: path.join(__dirname + './../../../../.env')});



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

  urlGoogle(): string {
    const url = this.getConnectionUrl();
    return url;
  }

  async serializeAccountFromCode(code: string) {
    try {
      const data = await this.auth.getToken(code);
      const tokens = data.tokens;
      this.auth.setCredentials(tokens);
      const plus = this.getGooglePlusApi();
      const me = await plus.people.get({ userId: 'me' });
      console.log(me);
      const userGoogleId = me.data.id;
      const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
      return {
        id: userGoogleId,
        email: userGoogleEmail,
      };
    } catch (error) {
      throw error
    }
  }
}