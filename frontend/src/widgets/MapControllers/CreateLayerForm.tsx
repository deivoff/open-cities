import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_LAYER, CreateLayer, CreateLayerVariables } from '../../apollo/mutations';
import { Button } from '../../components/layout';

interface Values {
  name: string;
  description: string;
}
interface Props {
  city: string;
}

export const CreateLayerForm: React.FC<Props> = ({ city }) => {
  const [createLayer, { data }] = useMutation<CreateLayer, CreateLayerVariables>(CREATE_LAYER);

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      onSubmit={({ name, description }: Values, { setSubmitting }: FormikHelpers<Values>) => {
        createLayer({
          variables: {
            name,
            description,
            city,
          },
        });
        setSubmitting(false);
      }}
      render={() => (
        <Form>
          <label htmlFor="name">Название слоя</label>
          <Field id="name" name="name" placeholder="Ваше название" type="text" />

          <label htmlFor="description">Описание слоя</label>
          <Field component="textarea" id="description" name="description" placeholder="Ваше описание" type="text" />

          <Button type="submit" style={{ display: 'block' }}>
            Отправить
          </Button>
        </Form>
      )}
    />
  );
};
