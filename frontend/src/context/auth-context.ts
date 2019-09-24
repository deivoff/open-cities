import React from 'react';

export interface IAuthContext {
  token: string | null;
  userId: string | null;
  login: ILogin;
  logout: () => void;
}

export interface ILogin {
  (
    token: string | null,
    userId: string | null,
    tokenExpiration: number
  ): void;
}

export default React.createContext<IAuthContext>({
  token: null,
  userId: null,
  login: (token, userId, tokenExpiration) => {},
  logout: () => {}
});