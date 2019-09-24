import React, { useState, useEffect, MouseEvent } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { getRandomInt } from '../widgets/MainBanner/utils';
import { Banner } from '../widgets/MainBanner';
import { GET_GOOGLE_REDIRECT_URL, AUTH_GOOGLE } from '../apollo';



export const MainPage = () => {
  const [dots, setDots] = useState([{ duration: getRandomInt(4, 8), key: 0 }]);
  const apolloClient = useApolloClient();
  const [activeDots, setActiveDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeDots < 200) {
        setDots([...dots, { duration: getRandomInt(3, 5), key: 0 }]);
        setActiveDots(activeDots + 1);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [dots, activeDots]);

  const redirectHandler = async (e: MouseEvent) => {
    e.preventDefault()

    try {
      const { data } = await apolloClient.query({ query: GET_GOOGLE_REDIRECT_URL })
      const { url } = data.getGoogleOAuthRedirect;
      const test = window.open(url, 'OAuth')!;
      window.addEventListener('message', authHandler.bind(test));
      
    } catch (error) {
      throw error;
    }
  }

  async function authHandler(this: Window, e: MessageEvent) {
    // 'this' = children window 
    this.close();
    window.removeEventListener('message', authHandler);
    const code = e.data;

    try {
      const { data } = await apolloClient.mutate({ mutation: AUTH_GOOGLE, variables: { code } });
      console.log(data);
    } catch (error) {
      throw error;
    };
  }

  return (
    <>
      <Helmet>
        <title>Открытые города | Главная </title>
      </Helmet>
      <Banner dots={dots} />
      <button onClick={redirectHandler}>Авторизация</button>
    </>
  );
};