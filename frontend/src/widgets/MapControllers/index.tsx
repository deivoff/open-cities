import React, { useState } from 'react';
import css from './MapControllers.module.sass';
import { Modal } from '../../components/modal';
import { Formik, Field, Form, FormikActions } from 'formik';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_LAYER, GET_CITIES, GET_LAYERS } from '../../apollo';

interface Values {
  name: string;
  description: string;
}

interface MapControllersProps {
  defaultCity: string;
}

interface CreateLayerProps {
  city: string;
}

export const CreateLayerModal = ({ city }: CreateLayerProps) => {
  const [isCreateLayerModalOpen, setCreateLayerModalOpen] = useState(false);
  const [createLayer, { data }] = useMutation(CREATE_LAYER);

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
        <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      onSubmit={({ name, description}: Values, { setSubmitting }: FormikActions<Values>) => {
        createLayer({
          variables: {
            name,
            description,
            city,
          }
        })
        setSubmitting(false)
      }}
      render={() => (
        <Form>
          <label htmlFor="name">Название слоя</label>
          <Field id="name" name="name" placeholder="Ваше название" type="text" />

          <label htmlFor="description">Описание слоя</label>
          <Field component='textarea' id="description" name="description" placeholder="Ваше описание" type="text" />

          <button type="submit" style={{ display: 'block' }}>
            Отправить
          </button>
        </Form>
      )}
    />
      </Modal>
    </>
  )
}


export const MapControllers = ({ defaultCity }: MapControllersProps) => {
  const { data: layersData, loading: layersLoading, error: layersError} = useQuery(GET_LAYERS, { variables: { city: defaultCity }});
  
  return(
    <>
      <CreateLayerModal city={defaultCity}/>
    </>
  )
}