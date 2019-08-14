import React from 'react';
import ReactDOM from 'react-dom';
// import cn from 'classnames';
import { IModal } from '../../store/modals/types';
import { usePortal } from '../portal/portal';
import { AuthModal } from './authModal';
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
    {props.children}
  </div>
);

export const Modal = ({ type, handlerClose }: IModal & IModalProps) => {
  const target = usePortal('modal');
  let modalComponent = null;
  switch (type) {
    case 'auth': {
      modalComponent = (
        <ModalWrapper onClick={handlerClose}>
          <AuthModal />
        </ModalWrapper>
      );
      break;
    }
    default:
      break;
  }
  return target ? ReactDOM.createPortal(modalComponent, target) : null;
};
