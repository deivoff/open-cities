import { OPEN_MODAL, CLOSE_MODAL, IModal } from './types';

export const openModal = (modal: IModal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
