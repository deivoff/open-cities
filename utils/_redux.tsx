/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import isFunction from 'lodash/isFunction';
import { initializeStore } from '../frontend/store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?: any) {
  let myWindow: any;

  if (typeof window !== 'undefined') {
    myWindow = window;
  }
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!myWindow[__NEXT_REDUX_STORE__]) {
    myWindow[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return myWindow[__NEXT_REDUX_STORE__];
}

export default (App: any) => {
  return class AppWithRedux extends React.Component {
    reduxStore: any;

    static async getInitialProps(appContext: any) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      // const cities = await;
      const reduxStore = getOrCreateStore({
        cities: [
          {
            name: 'Тюмень',
            url: '/tmn'
          },
          {
            name: 'Екатеринбург',
            url: '/ekb'
          }
        ]
      });

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (isFunction(App.getInitialProps)) {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
