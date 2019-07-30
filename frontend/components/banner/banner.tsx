import React from 'react';
import cn from 'classnames';

const css = require('./banner.styl');

export const Banner = () => {
  return (
    <section className={cn(css.banner)}>
      <div className={css.description}>
        <h1 className={css.title}>Правдивая и глуповатая фраза</h1>
        <p className={css.text}>
          Более подробное описательное предложение о роде и виде занятий для
          этого. И ниже призыв присоединиться к системе, все по шаблону
        </p>
      </div>
    </section>
  );
};
