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
};

export const H1: React.FC = (props) => {
  return <h1 className={cn(css['page__title'])} {...props} />;
};


interface Page extends React.FC {
  Wrapper: React.FC;
  Map: React.FC;
}
export const Page: Page  = ({ children }) => {
  return <>{children}</>;
};

interface Card extends React.FC {
  Title: React.FC;
  Body: React.FC;
}
export const Card: Card = (props) => {
  return <div className={cn(css['card'])} {...props} />;
};

Page.Wrapper = function Wrapper(props) {
  return <div className={cn(css['page__wrapper'])} {...props} />;
};

Page.Map = function Map(props) {
  return(<div className={cn(css['page__map'])} {...props} />);
};

Card.Title = function Title(props) {
  return <div className={cn(css['card__title'])} {...props} />;
};

Card.Body = function Body(props) {
  return <div className={cn(css['card__body'])} {...props} />;
};
