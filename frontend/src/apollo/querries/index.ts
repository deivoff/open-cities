import { gql } from "apollo-boost";

export const GET_GOOGLE_REDIRECT_URL = gql`
  {
    getGoogleOAuthRedirect {
      url
    }
  }
`;

export const GET_CITIES = gql`
  {
    cities {
      name
      url
      center
      zoom
    }
  }
`;

export const GET_LAYERS = gql`
  query GetLayers($city: String!) {
    layers(city: $city) {
      _id
      name
      description
    }
  }
`