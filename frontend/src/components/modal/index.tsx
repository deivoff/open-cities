import ReactModal from 'react-modal';
import React from 'react';
import css from './modal.module.sass';

type ModalProps = ReactModal.Props & {
  onRequestClose: NonNullable<ReactModal.Props['onRequestClose']>
}
interface Modal extends React.FC<ModalProps> {
  Title: React.FC;
  Body: React.FC;
}
export const Modal: Modal = ({ children, ...rest }) => (
  <ReactModal {...rest} className={css['modal-window']} overlayClassName={css['modal-wrapper']}>
    <button
      type="button"
      className={css['modal-window__close']}
      onClick={rest.onRequestClose}
      onKeyPress={rest.onRequestClose}
    >
      <span />
      <span />
    </button>
    {children}
  </ReactModal>
);

Modal.Title = function Title({ children, ...rest }) {
  return (
    <h2 {...rest} className={css['modal-window__title']}>
      {children}
    </h2>
  );
};

Modal.Body = function Body(props) {
  return <div {...props} className={css['modal-window__body']} />;
};
