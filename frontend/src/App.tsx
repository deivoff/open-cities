import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo';

import AuthContext from './context/auth-context';
import { MainPage } from './pages/Main';
import { Header } from './components/header';
import { ILogin } from './context/auth-context';

import './static/styles/_main.sass';

const App: React.FC = () => {
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
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <AuthContext.Provider value={{
          token,
          userId,
          login, 
          logout
        }}>
        <Header />
        <main className='main-content'>
          <Switch>
            <Route path='/' component={MainPage} />
          </Switch>
        </main>
      </AuthContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
