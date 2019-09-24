import React, { useState } from 'react';

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

export const useAuth = (): IAuthContext => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login: ILogin = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  }

  const logout = () => {
    setToken(null);
    setUserId(null);
  }

  return {login, logout, userId, token}
}