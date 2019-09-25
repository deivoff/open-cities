import React, { useState } from 'react';

export interface IAuthContext {
  token: string | null;
  user: IUser | null;
  login: ILogin;
  logout: () => void;
}

export interface IUser {
  name: {
    givenName: string,
    familyName: string,
  }
  photos: [{
    url: string
  }]
}
export interface ILogin {
  (
    token: string | null,
    user: any,
  ): void;
}

export const AuthContext = React.createContext<IAuthContext>({
  token: null,
  user: null,
  login: (token) => {},
  logout: () => {}
});

export const useAuth = (): IAuthContext => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser| null>(null);

  const login: ILogin = (token, user) => {
    setToken(token);
    setUser(user);
  }

  const logout = () => {
    setToken(null);
    setUser(null);
  }

  return {login, logout, token, user}
}