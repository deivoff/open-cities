import React, { useState, useEffect, MouseEvent } from 'react';
import { Helmet } from 'react-helmet';
import { getRandomInt } from '../widgets/MainBanner/utils';
import { Banner } from '../widgets/MainBanner/MainBanner';

export const MainPage = () => {
  const [dots, setDots] = useState([{ duration: getRandomInt(4, 8), key: 0 }]);
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

    const requestBody = {
      query: `
        {
          getGoogleOAuthRedirect {
            url
          }
        }
      `
    }

    try {
      const response = await fetch('http://localhost:7000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed!');
      };

      const resData = await response.json();
      const { url } = resData.data.getGoogleOAuthRedirect;
      const test = window.open(url, 'OAuth')!;
      window.addEventListener('message', authHandler.bind(test));
      
    } catch (error) {
      throw error;
    }
  }

  async function authHandler(this: Window, e: MessageEvent) {
    this.close();
    window.removeEventListener('message', authHandler);
    const token = e.data;

    const requestBody = {
      query: `
      mutation {
        authGoogle(accessToken: "${token}") {
          id,
          email
        }
      }
      `
    }

    try {
      const response = await fetch('http://localhost:7000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed!');
      };

      const resData = await response.json();
      console.log(resData);
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