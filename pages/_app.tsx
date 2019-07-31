import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Header from '../frontend/components/header';
import withReduxStore from '../utils/_redux';

require('../frontend/static/styles/main.styl');

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

interface IApp {
  reduxStore?: any;
}

class MyApp extends App<IApp> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
