import React from 'react';
import cn from 'classnames';
import { IUserSchema } from '../../../../server/components/user/types';

const css = require('./profile.styl');

interface IProfileProps {
  profile: IUserSchema;
}

export const ProfilePanel = ({ profile }: IProfileProps) => {
  return (
    <div className={css.profile}>
      <div className={css['profile__name']}>
        {profile.name
          ? `${profile.name.givenName} ${profile.name.familyName}`
          : null}
      </div>
      <div className={css['profile__photo']}>
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
      <div className={cn(css['profile__list'], css['_dropdown'])}>
        <ul>
          <li>Мои карты</li>
          <li>Редактор карт</li>
        </ul>
      </div>
    </div>
  );
};
