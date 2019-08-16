import React from 'react';
import Head from 'next/head';

import { withSSR } from '../utils/_ssr';

const CityScreen = () => {
  return (
    <>
      <Head>
        <title>Открытые города | Город </title>
      </Head>
    </>
  );
};

export default withSSR()(CityScreen);
