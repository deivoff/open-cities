import React from 'react';

import { Header } from '../frontend/components/header/header';
import { withSSR } from '../utils/_ssr';
import { Banner } from '../frontend/components/banner/banner';

require('../frontend/static/styles/main.styl');

const HomeScreen = (props: any) => (
  <div {...props}>
    <Header />
    <main>
      <Banner />
    </main>
  </div>
);

export default withSSR()(HomeScreen);
