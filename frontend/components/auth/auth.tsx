import React from 'react';

const css = require('./auth.styl');

export const Auth: React.SFC = () => {
  return (
    <div>
      <h2 className={css['auth__title']}>Вход через социальные сети</h2>
      <p className={css['auth__text']}>
        Авторизуйтесь через следующие приложения:
      </p>
      <a href='/auth/google' className={css['auth__google']}>
        Google
      </a>
    </div>
  );
};
