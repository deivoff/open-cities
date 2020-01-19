import React from 'react';
import cn from 'classnames';
import css from './page.module.sass';

type Button = React.FC<React.ButtonHTMLAttributes<{}>>;
export const Button: Button = ({ type = 'button', ...rest }) => {
  return <button className={cn(css.button, css['_success'])} type={type} {...rest} />;
};

export const GoogleButton: Button = ({ type = 'button', ...rest}) => {
  return <button className={css['google-button']} type={type} {...rest} />;
};

export const H1: React.FC = ({ children, ...rest }) => {
  return (
    <h1 className={cn(css['page__title'])} {...rest}>
      {children}
    </h1>
  );
};

interface Page extends React.FC {
  Wrapper: React.FC;
  Map: React.FC;
}
export const Page: Page = ({ children }) => {
  return <>{children}</>;
};

interface Card extends React.FC {
  Title: React.FC;
  Body: React.FC;
}
export const Card: Card = props => {
  return <div className={cn(css['card'])} {...props} />;
};

Page.Wrapper = function Wrapper(props) {
  return <div className={cn(css['page__wrapper'])} {...props} />;
};

Page.Map = function Map(props) {
  return <div className={cn(css['page__map'])} {...props} />;
};

Card.Title = function Title(props) {
  return <div className={cn(css['card__title'])} {...props} />;
};

Card.Body = function Body(props) {
  return <div className={cn(css['card__body'])} {...props} />;
};
