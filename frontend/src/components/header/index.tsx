/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, MouseEvent, useContext } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { Button, GoogleButton } from '../layout';
import { GET_GOOGLE_REDIRECT_URL, AUTH_GOOGLE, GET_CITIES } from '../../apollo';
import { Modal } from '../modal';
import { Spiner } from '../spiner';
import { AuthContext, IAuthContext, IUser } from '../../context';

import s from './header.module.sass';
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
                  {name}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

interface IProfile {
  user: IUser;
  logout: () => void;
}
const Profile = ({user: { name, photos }, logout }: IProfile) => {
  return(
    <div className={s['nav__profile']}>
      <div className={cn(s['nav__elem'], s['_dropdown'])}>
        {name
          ? `${name.givenName} ${name.familyName}`
          : null}
        <div className={cn(s['nav__dropdown'], s['_profile'])}>
          <ul className={cn(s['nav__list'], s['_profile'])}>
            <li className={s['nav__elem']}>
              <Link to='/profile'>
                Мой профиль
              </Link>
            </li>
            <li className={s['nav__elem']}>
              <Link to='/maps'>
                Мои карты
              </Link>
            </li>
            <li className={s['nav__elem']}>
              <Link to='/researches'>
                Мои исследования
              </Link>
            </li>
            <li className={s['nav__elem']} onClick={logout}>
                Выйти
            </li>
          </ul>
        </div>
      </div>
      <div className={s['nav__photo']}>
        <img
          alt='User thimbnail'
          src={
            // eslint-disable-next-line no-nested-ternary
            photos
              ? photos[photos.length - 1].url
                ? photos[photos.length - 1].url
                : ''
              : ''
          }
        />
      </div>
    </div>
  )
}

export const Header: React.SFC = () => {
  const [isAuthModalOpen, setAuthModal] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const { token, user, login, logout } = useContext<IAuthContext>(AuthContext)
  const apolloClient = useApolloClient();

  const openModalHandler = () => {
    setAuthModal(true);
  }

  const closeModalHandler = () => {
    setAuthModal(false);
  }

  const googleSignHandler = async (e: MouseEvent) => {
    e.preventDefault()
    setAuthLoading(true);
  
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
      const { name, photos, token: responseToken } = data.authGoogle;
      login(responseToken, { name, photos });
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
      setAuthModal(false);;
    }
  }
  return (
    <header className={cn(s.header)}>
      <Link className={s.logo} to='/'>
        Открытые города
      </Link>
      <button type='button' className={s['nav__button']}>
        <span />
        <span />
        <span />
      </button>
      <nav className={s.nav}>
        <ul className={cn(s['nav__list'])}>
          <li className={cn(s['nav__elem'])}>
            <Link to='/about'>
              О проекте
            </Link>
          </li>
          <li className={cn(s['nav__elem'])}>
            <Link to='/research'>
              Исследования
            </Link>
          </li>
          <li className={cn(s['nav__elem'], s['_dropdown'])}>
            Города
            <CitiesList />
          </li>
        </ul>
        {
          authLoading 
          ? <div className={s['nav__spiner']}><Spiner /></div>
          : (token && user)
            ? <Profile user={user} logout={logout}/>
            : <Button onClick={openModalHandler}>Войти</Button> }
        <Modal 
          isOpen={isAuthModalOpen}
          onRequestClose={closeModalHandler}
          shouldCloseOnOverlayClick={true}
        >
          <Modal.Title>Вход через социальные сети</Modal.Title>
          { authLoading 
            ? <Spiner />
            : (<>
                <Modal.Body>
                  Авторизуйтесь через следующие приложения:
                </Modal.Body>
                <GoogleButton onClick={googleSignHandler}>
                  Google
                </GoogleButton>
              </>)
            }
        </Modal>
      </nav>
    </header>
  );
};