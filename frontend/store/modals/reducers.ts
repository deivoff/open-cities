import { OPEN_MODAL } from './types';

export const modalsReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return [...state, action.content];
    default:
      return state;
  }
};
