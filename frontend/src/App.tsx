import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';
import './static/styles/_main.sass';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main className='main-content'>
        <Switch>
          <Route path='/' component={MainPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
