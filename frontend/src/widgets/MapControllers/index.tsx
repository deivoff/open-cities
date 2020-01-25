import React, { useContext, useState } from 'react';
import { LayersControl } from 'react-leaflet';

import css from './MapControllers.module.sass';
import { Modal } from '../../components';
import { AuthContext } from '../../context';
import { CreateLayerForm } from './CreateLayerForm';

interface MapControllersProps {
  defaultCity: string;
}

interface CreateLayerProps {
  city: string;
}

export const CreateLayerModal: React.FC<CreateLayerProps> = ({ city }) => {
  const [isCreateLayerModalOpen, setCreateLayerModalOpen] = useState(false);
  const { token } = useContext<AuthContext>(AuthContext);

  const openModalHandler = () => {
    setCreateLayerModalOpen(true);
  };

  const closeModalHandler = () => {
    setCreateLayerModalOpen(false);
  };

  return (
    <>
      <button onClick={openModalHandler} className={css.add}>
        +
      </button>
      <Modal isOpen={isCreateLayerModalOpen} onRequestClose={closeModalHandler} shouldCloseOnOverlayClick={true}>
        {token ? (
          <CreateLayerForm city={city} />
        ) : (
          'Чтобы взаимодействовать со слоями, вам необходимо зарегистрироваться!'
        )}
      </Modal>
    </>
  );
};

export const MapControllers: React.FC<MapControllersProps> = ({ defaultCity }) => {
  return (
    <>
      <CreateLayerModal city={defaultCity} />
    </>
  );
};
