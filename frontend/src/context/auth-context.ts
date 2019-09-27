import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export interface IAuthContext {
  token: string | null;
  user: IUser | null;
  login: ILogin;
  logout: () => void;
}

export interface IUser {
  id: string,
  email: string,
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
    token: string,
  ): void;
}

export const AuthContext = React.createContext<IAuthContext>({
  token: null,
  user: null,
  login: (token: string) => {},
  logout: () => {}
});

export const useAuth = (): IAuthContext => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser| null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken);
      const { email, name, photos, id }: IUser = jwtDecode(savedToken);
      setUser({email, name, photos, id});
    }
  }, [])

  const login: ILogin = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    const { email, name, photos, id }: IUser = jwtDecode(token);
    setUser({email, name, photos, id});
  }

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUser(null);
  }

  return {login, logout, token, user}
}