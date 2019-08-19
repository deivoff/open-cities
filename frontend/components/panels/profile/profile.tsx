import React from 'react';
import cn from 'classnames';
import { IUserSchema } from '../../../../server/components/user/types';

const cssHeader = require('../../header/header.styl');
const cssProfile = require('./profile.styl');
const ArrowMenu = require('../../../assets/svg/ArrowMenu.svg');

interface IProfileProps {
  profile: IUserSchema;
}

export const ProfilePanel = ({ profile }: IProfileProps) => {
  return (
    <div className={cssProfile.profile}>
      <div className={cn(cssHeader['nav__elem'], cssHeader['_dropdown'])}>
        {profile.name
          ? `${profile.name.givenName} ${profile.name.familyName}`
          : null}
        <ArrowMenu />
        <div className={cn(cssHeader['nav__dropdown'], cssHeader['_profile'])}>
          <ul className={cn(cssHeader['nav__list'], cssHeader['_profile'])}>
            <li className={cssHeader['nav__elem']}>Мой профиль</li>
            <li className={cssHeader['nav__elem']}>Мои карты</li>
            <li className={cssHeader['nav__elem']}>Мои исследования</li>
            <li className={cssHeader['nav__elem']}>Выйти</li>
          </ul>
        </div>
      </div>
      <div className={cssProfile['profile__photo']}>
        <img
          alt='User thimbnail'
          src={
            // eslint-disable-next-line no-nested-ternary
            profile.photos
              ? profile.photos[profile.photos.length - 1].url
                ? profile.photos[profile.photos.length - 1].url
                : ''
              : ''
          }
        />
      </div>
    </div>
  );
};
