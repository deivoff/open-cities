import React from 'react';
import { Modal } from './modal';

export const AuthModal: React.SFC = () => {
  return (
    <Modal opened>
      <form>
        <input type='email' name='EMAIL' />
        <input type='password' name='PASS' />
        <button type='submit'></button>
      </form>
    </Modal>
  );
};
