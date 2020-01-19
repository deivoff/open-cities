import { gql } from 'apollo-boost';
export * from './types/GetCities';

export const GET_CITIES = gql`
  query GetCities {
    cities {
      name
      url
      center
      zoom
    }
  }
`;
