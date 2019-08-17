import passport from 'koa-passport';
const GoogleStrategy = require('passport-google-oauth20');
import keys from './config';
import UserModel, { IUserPhotoSchema, IUserSchema } from '../user/types';

interface IDoneFunction {
  (err: any, user: IUserSchema): void;
}

passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
   return UserModel.findById(id)
   .then((user: IUserSchema | null) => {
    done(null, user)
  })
  .catch(err => {
    done(err, null)
  })
})

passport.use(new GoogleStrategy({
  ...keys.google,
  callbackURL: '/auth/google/redirect'
}, (accessToken: string, refreshToken: string, profile: any, done: IDoneFunction) => {
  const { id, name, photos} = profile;
  console.log(accessToken, refreshToken);
  UserModel.findOne({
    googleID: id
  }).then((currentUser: IUserSchema | null) => {
    if (currentUser) {
      done(null, currentUser)
    } else {
      new UserModel({
        googleID: id,
        name,
        photos: photos.map(({ value }: any): IUserPhotoSchema => {
          return {
          url: value
          }
        }),
        role: 'user'
      }).save().then((newUser: IUserSchema) => {
        console.log('The user has been saved: ' + newUser)
        done(null, newUser)
      })
    }
  })
}));