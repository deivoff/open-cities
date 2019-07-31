import React from 'react';
import Head from 'next/head';

import { withSSR } from '../utils/_ssr';
import { Banner } from '../frontend/components/banner/banner';

const IndexScreen = () => (
  <>
    <Head>
      <title>Открытые города | Главная </title>
    </Head>
    <Banner />
  </>
);

export default withSSR()(IndexScreen);
