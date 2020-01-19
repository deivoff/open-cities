import { gql } from 'apollo-boost';
export * from './types/CreateLayer';

export const CREATE_LAYER = gql`
  mutation CreateLayer($name: String!, $description: String!, $city: String!) {
    createLayer(layerInput: { name: $name, description: $description, city: $city }) {
      _id
      name
      description
    }
  }
`;
