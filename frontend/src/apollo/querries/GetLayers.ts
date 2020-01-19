import { gql } from 'apollo-boost';
export * from './types/GetLayers';

export const GET_LAYERS = gql`
  query GetLayers($city: String!) {
    layers(city: $city) {
      _id
      name
      description
    }
  }
`;
