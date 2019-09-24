import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { MainPage } from './pages/Main';
import './static/styles/_main.sass';
import { client } from './apollo';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <main className='main-content'>
          <Switch>
            <Route path='/' component={MainPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
