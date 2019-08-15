import { OPEN_MODAL, CLOSE_MODAL, IModal } from './types';

export const modalsReducer = (state: IModal[] = [], action: any): IModal[] => {
  switch (action.type) {
    case OPEN_MODAL: {
      const { modal } = action;
      return [...state, modal];
    }
    case CLOSE_MODAL: {
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    }
    default:
      return state;
  }
};
