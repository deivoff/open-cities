/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { ICitySchema } from '../../../server/components/city/ICity';
import { IHeaderProps } from '.';

const ArrowMenu = require('../../assets/svg/ArrowMenu.svg');
const s = require('./header.styl');
const btn = require('./../button/button.styl');

export const Header: React.SFC<IHeaderProps> = ({
  signHandler,
  cities
}: IHeaderProps) => {
  return (
    <header className={cn(s.header)}>
      <a className={s.logo} href='/'>
        Открытые города
      </a>
      <nav className={s.nav}>
        <ul className={cn(s['nav__list'])}>
          <li className={cn(s['nav__elem'])}>
            <Link href='/about'>
              <a>О проекте</a>
            </Link>
          </li>
          <li className={cn(s['nav__elem'])}>
            <Link href='/research'>
              <a>Исследования</a>
            </Link>
          </li>
          <li className={cn(s['nav__elem'], s['_dropdown'])}>
            Города <ArrowMenu />
            <div className={cn(s['nav__dropdown'])}>
              <ul className={cn(s['nav__list'])}>
                {cities
                  ? cities.map(({ name, url }: ICitySchema) => (
                      <li className={cn(s['nav__elem'])} key={name}>
                        <Link href={url}>
                          <a>{name}</a>
                        </Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </li>
        </ul>
        <button
          className={cn(btn.button, btn['_success'])}
          onClick={signHandler}
          type='button'
        >
          Войти
        </button>
      </nav>
    </header>
  );
};
