import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo';
import { Header } from './components/header';

import { AuthContext, useAuth } from './context';
import { MainPage, MapPage } from './pages';

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
            <Route exact path='/' component={MainPage} />
            <Route path='/cities/:city' component={MapPage} />
          </Switch>
        </main>
      </AuthContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
