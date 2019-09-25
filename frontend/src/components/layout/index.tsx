/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import cn from 'classnames';
import css from './page.module.sass';

export const Button = (props: any) => {
  return (
    <button
      className={cn(css.button, css['_success'])}
      type='button'
      {...props}
    />
  );
};

export const GoogleButton = (props: any) => {
  return (
    <button
      className={css['google-button']}
      type='button'
      {...props}
    />
  );
}

export const H1 = (props: any) => {
  return <h1 className={cn(css['page__title'])} {...props} />;
};

export const Page = ({ children }: any) => {
  return <>{children}</>;
};

Page.Wrapper = function Wrapper(props: any) {
  return <div className={cn(css['page__wrapper'])} {...props} />;
};

Page.Map = function Map(props: any) {
  return(<div className={cn(css['page__map'])} {...props} />);
}

export function Card(props: any) {
  return <div className={cn(css['card'])} {...props} />;
}

Card.Title = function Title(props: any) {
  return <div className={cn(css['card__title'])} {...props} />;
};

Card.Body = function Body(props: any) {
  return <div className={cn(css['card__body'])} {...props} />;
};
