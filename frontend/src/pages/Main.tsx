import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getRandomInt } from '../widgets/MainBanner/utils';
import { Banner } from '../widgets';

export const MainPage: React.FC = () => {
  const MAX_DOTS = 200;
  const TIME_CREATE_DOTS_MS = 20;

  const [dots, setDots] = useState([{ duration: getRandomInt(4, 8), key: 0 }]);
  const [activeDots, setActiveDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeDots < MAX_DOTS) {
        setDots([...dots, { duration: getRandomInt(3, 5), key: 0 }]);
        setActiveDots(activeDots + 1);
      }
    }, TIME_CREATE_DOTS_MS);
    return () => clearInterval(interval);
  }, [dots, activeDots]);

  return (
    <>
      <Helmet>
        <title>Открытые города | Главная </title>
      </Helmet>
      <Banner dots={dots} />
    </>
  );
};
