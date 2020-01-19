import React from 'react';
import css from './spiner.module.sass';

export const Spiner: React.FC = () => (
  <div className={css.spiner}>
    <div className={css['lds-ellipsis']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
