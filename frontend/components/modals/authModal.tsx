import React from 'react';

export const AuthModal: React.SFC = () => {
  return (
    <form>
      <input type='email' name='EMAIL' />
      <input type='password' name='PASS' />
      <button type='submit'></button>
    </form>
  );
};
