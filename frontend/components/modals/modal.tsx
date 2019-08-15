import React from 'react';
import ReactDOM from 'react-dom';
// import cn from 'classnames';
import { IModal } from '../../store/modals/types';
import { usePortal } from '../portal/portal';
import { Auth } from '../auth/auth';
import { IModalProps } from '.';

const css = require('./modal.styl');

const ModalWrapper = (props: any) => (
  <div
    role='button'
    tabIndex={0}
    onClick={props.onClick}
    onKeyPress={props.onClick}
    className={css['modal-wrapper']}
  >
    <div className={css['modal-window']}>
      <button
        type='button'
        className={css['modal-window__close']}
        onClick={props.onClick}
        onKeyPress={props.onClick}
      >
        <span />
        <span />
      </button>
      {props.children}
    </div>
  </div>
);

export const Modal = ({ type, handlerClose }: IModal & IModalProps) => {
  const target = usePortal('modal');
  let modalComponent = null;
  switch (type) {
    case 'auth': {
      modalComponent = (
        <ModalWrapper onClick={handlerClose}>
          <h2>Вход</h2>
          <Auth />
        </ModalWrapper>
      );
      break;
    }
    default:
      break;
  }
  return target ? ReactDOM.createPortal(modalComponent, target) : null;
};
