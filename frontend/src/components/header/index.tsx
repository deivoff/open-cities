/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import { Button } from '../layout';
import s from './header.module.sass';
import { Link } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_GOOGLE_REDIRECT_URL, AUTH_GOOGLE, GET_CITIES } from '../../apollo';

// const ArrowMenu = require('../../assets/svg/ArrowMenu.svg');

const CitiesList = () => {
  const { data, loading: citiesLoading, error: citiesError} = useQuery(GET_CITIES);

  if (citiesLoading) return null
  if (citiesError) return null

  const { cities } = data;

  return (
    <div className={cn(s['nav__dropdown'])}>
      <ul className={cn(s['nav__list'])}>
        {cities ? cities.map(({ name, url }: any) => (
              <li className={cn(s['nav__elem'])} key={name}>
                <Link to={`/cities/${url}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export const Header: React.SFC = () => {
  const apolloClient = useApolloClient();
  
  const signHandler = async (e: MouseEvent) => {
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
    <header className={cn(s.header)}>
      <a className={s.logo} href='/'>
        Открытые города
      </a>
      <button type='button' className={s['nav__button']}>
        <span />
        <span />
        <span />
      </button>
      <nav className={s.nav}>
        <ul className={cn(s['nav__list'])}>
          <li className={cn(s['nav__elem'])}>
            <Link to='/about'>
              <a>О проекте</a>
            </Link>
          </li>
          <li className={cn(s['nav__elem'])}>
            <Link to='/research'>
              <a>Исследования</a>
            </Link>
          </li>
          <li className={cn(s['nav__elem'], s['_dropdown'])}>
            Города
            <CitiesList />
          </li>
        </ul>
        <Button onClick={signHandler}>Войти</Button>
      </nav>
    </header>
  );
};