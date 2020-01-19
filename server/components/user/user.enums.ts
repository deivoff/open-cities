import { registerEnumType } from 'type-graphql';

export enum UserType {
  user = 'user',
  researcher = 'researcher',
  admin = 'admin',
}

registerEnumType(UserType, {
  name: 'UserType', // this one is mandatory
});
