export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface IModal {
  type: 'auth' | 'form';
  content?: any;
}
