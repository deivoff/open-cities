import React from 'react';
import cn from 'classnames';

const ArrowMenu = require('../../assets/svg/ArrowMenu.svg');
const s = require('./header.styl');
const btn = require('./../button/button.styl');

interface IHeaderProps {
  signHandler?: any;
}

export const Header: React.SFC<IHeaderProps> = ({ signHandler }) => {
  return (
    <header className={cn(s.header)}>
      <a className={s.logo} href='/'>
        Открытые города
      </a>
      <nav className={s.nav}>
        <ul className={cn(s['nav__list'])}>
          <li className={cn(s['nav__elem'])}>О проекте</li>
          <li className={cn(s['nav__elem'])}>Исследования</li>
          <li className={cn(s['nav__elem'], s['_dropdown'])}>
            Города <ArrowMenu />
            <div className={cn(s['nav__dropdown'])}>
              <ul className={cn(s['nav__list'])}>
                <li className={cn(s['nav__elem'])}>Тюмень</li>
                <li className={cn(s['nav__elem'])}>Екатеринбург</li>
                <li className={cn(s['nav__elem'])}>Челябинск</li>
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
