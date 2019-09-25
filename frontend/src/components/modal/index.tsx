import ReactModal from 'react-modal';
import React from 'react';
import css from './modal.module.sass';

export const Modal = (props: ReactModal.Props & { children: React.ReactNode}) => (
  <ReactModal
    {...props}
    className={css['modal-window']}
    overlayClassName={css['modal-wrapper']}
  >
      <button
        type='button'
        className={css['modal-window__close']}
        onClick={props.onRequestClose}
        onKeyPress={props.onRequestClose}
      >
        <span />
        <span />
      </button>
    {props.children}
  </ReactModal>
)

Modal.Title = function Title(props: any) {
  return <h2 
    {...props} 
    className={css['modal-window__title']}
  />;
}
Modal.Body = function Body(props: any) {
  return <div
    {...props} 
    className={css['modal-window__body']}
  />;
}