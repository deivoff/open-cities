import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IModal } from '../../store/modals/types';
import { usePortal } from '../portal/portal';
import { Auth } from '../auth/auth';
import { closeModal } from '../../store/modals/actions';

const css = require('./modal.styl');

export interface IModalProps {
  handlerClose?: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handlerClose: () => dispatch(closeModal())
});

const ModalWrapper = connect(
  null,
  mapDispatchToProps
)((props: any) => (
  <div
    role='button'
    tabIndex={0}
    onClick={props.handlerClose}
    onKeyPress={props.handlerClose}
    className={cn(css['modal-wrapper'], css['_shadow'])}
  >
    <div className={css['modal-window']}>
      <button
        type='button'
        className={css['modal-window__close']}
        onClick={props.handlerClose}
        onKeyPress={props.handlerClose}
      >
        <span />
        <span />
      </button>
      {props.children}
    </div>
  </div>
));

export const Modal = ({ type }: IModal & IModalProps) => {
  const target = usePortal('modal');
  let modalComponent = null;
  switch (type) {
    case 'auth': {
      modalComponent = (
        <ModalWrapper>
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
