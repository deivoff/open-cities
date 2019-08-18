import React from 'react';

const css = require('./auth.styl');

export const Auth: React.SFC = () => {
  return (
    <div>
      <p>Авторизуйтесь через следующие приложения: </p>
      <a href='/auth/google' className={css['auth__google']}>
        Google
      </a>
    </div>
  );
};
