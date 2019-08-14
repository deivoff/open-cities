import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { withSSR } from '../utils/_ssr';
import { Banner, getRandomInt } from '../frontend/components/banner/banner';

const IndexScreen = () => {
  const [dots, setDots] = useState([{ duration: getRandomInt(4, 8), key: 0 }]);
  const [activeDots, setActiveDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeDots < 150) {
        setDots([...dots, { duration: getRandomInt(3, 5), key: 0 }]);
        setActiveDots(activeDots + 1);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [dots, activeDots]);

  return (
    <>
      <Head>
        <title>Открытые города | Главная </title>
      </Head>
      <Banner dots={dots} />
    </>
  );
};

export default withSSR()(IndexScreen);
