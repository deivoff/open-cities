import React, { useState } from 'react';
import css from './MapControllers.module.sass';
import { Modal } from '../../components/modal';

export const MapControllers = () => {
  const [isCreateLayerModalOpen, setCreateLayerModalOpen] = useState(false);

  const openModalHandler = () => {
    setCreateLayerModalOpen(true);
  }

  const closeModalHandler = () => {
    setCreateLayerModalOpen(false);
  }

  return(
    <>
      <button onClick={openModalHandler} className={css.add}>+</button>
      <Modal 
        isOpen={isCreateLayerModalOpen}
        onRequestClose={closeModalHandler}
        shouldCloseOnOverlayClick={true}
      >
        Some Body
      </Modal>
    </>
  )
}