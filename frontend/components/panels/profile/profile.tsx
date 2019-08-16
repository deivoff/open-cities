import React from 'react';
import cn from 'classnames';

const css = require('./profile.styl');

export const ProfilePanel = ({ profile: { role, userName } }: any) => {
  console.log(role);
  return (
    <div className={css.profile}>
      <div className={css['profile__name']}>{userName}</div>
      <div className={css['profile__photo']}></div>
      <div className={cn(css['profile__list'], css['_dropdown'])}>
        <ul>
          <li>Мои карты</li>
          <li>Редактор карт</li>
        </ul>
      </div>
    </div>
  );
};
