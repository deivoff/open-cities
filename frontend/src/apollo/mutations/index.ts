import { gql } from "apollo-boost";

export const AUTH_GOOGLE = gql`
  mutation AuthGoogle($code: String!){
    authGoogle(code: $code) {
      token
    }
  }
`;

export const CREATE_LAYER = gql`
  mutation CreateLayer($name: String!, $description: String!, $city: String!){
    createLayer(layerInput: {
      name: $name,
      description: $description,
      city: $city
    }) {
      _id
      name
      description
    }
  }
`