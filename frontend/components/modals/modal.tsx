import * as React from 'react';
import cn from 'classnames';
import { Portal } from '../portal/portal';

const css = require('./modal.styl');

interface IModalProps {
  opened?: boolean;
  children: any;
}

export const Modal = (props: IModalProps) => {
  const { opened = true, children } = props;
  console.log(opened);

  return (
    <>
      <Portal selector='#modal'>
        <div className={cn(css['overlay'])}>
          <div>{children}</div>
        </div>
      </Portal>
    </>
  );
};
