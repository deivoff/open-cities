import passport from 'koa-passport';
import keys from './config';
import UserModel, { IUserPhotoSchema, IUserSchema } from '../user/types';

const GoogleStrategy = require('passport-google-oauth20');

interface IDoneFunction {
  (err: any, user: IUserSchema | null): void;
}

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user: IUserSchema | null = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      ...keys.google,
      callbackURL: '/auth/google/redirect'
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: IDoneFunction
    ) => {
      const { id, name, photos } = profile;
      console.log(accessToken, refreshToken);
      try {
        const currentUser: IUserSchema | null = await UserModel.findOne({
          googleID: id
        });

        if (currentUser) {
          return done(null, currentUser);
        } else {
          const newUser = new UserModel({
            googleID: id,
            name,
            photos: photos.map(({ value }: any): IUserPhotoSchema => {
              return {
                url: value
              };
            }),
            role: 'user'
          });
          try {
            await newUser.save();
            return done(null, newUser);
          } catch (error) {
            return done(error, null);
          }
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
