import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo';
import { Header } from './components/header';

import { AuthContext, useAuth } from './context';
import { MainPage, MapPage } from './pages';

import './static/styles/_main.sass';

interface MapMatchParams {
  city: string;
}

interface MapLocationState {
  center: [number, number];
  zoom: number;
  name: string;
}

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
            <Route path='/cities/:city' component={
              (
                { match, location: { state: { center, zoom, name } } }: RouteChildrenProps<MapMatchParams, MapLocationState>
              ) => (
                <MapPage city={match!.params.city} center={center} zoom={zoom} cityName={name}/>
              )
            }/>
          </Switch>
        </main>
      </AuthContext.Provider>
      </BrowserRouter>
    </ApolloProvider>

  );
};

export default App;
