import ReactModal from 'react-modal';
import React from 'react';
import css from './modal.module.sass';


interface Modal extends React.FC<ReactModal.Props> {
  Title: React.FC;
  Body: React.FC;
}
export const Modal: Modal = (props) => (
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
);

Modal.Title = function Title(props) {
  return <h2
    {...props}
    className={css['modal-window__title']}
  />;
};

Modal.Body = function Body(props) {
  return <div
    {...props}
    className={css['modal-window__body']}
  />;
};
