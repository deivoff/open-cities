import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Router from 'next/router';
import Modal from '../frontend/components/modals';
import Header from '../frontend/components/header';
import withReduxStore from '../utils/_redux';

require('../frontend/static/styles/main.styl');

// https://github.com/zeit/next-plugins/issues/282
Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll<HTMLLinkElement>(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    els[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
  }
});

const Layout = ({ children }: any) => {
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
          <Modal />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
