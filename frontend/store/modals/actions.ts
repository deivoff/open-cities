import { OPEN_MODAL, CLOSE_MODAL } from './types';

export const openModal = (content: any) => {
  return {
    type: OPEN_MODAL,
    content
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
