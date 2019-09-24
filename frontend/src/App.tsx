import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo';

import AuthContext, { useAuth } from './context/auth-context';
import { MainPage } from './pages/Main';
import { Header } from './components/header';
import { ILogin } from './context/auth-context';

import './static/styles/_main.sass';

const App: React.FC = () => {
  const authContext = useAuth();
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <AuthContext.Provider value={authContext}>
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
