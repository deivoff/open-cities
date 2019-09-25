import { gql } from "apollo-boost";

export const AUTH_GOOGLE = gql`
  mutation AuthGoogle($code: String!){
    authGoogle(code: $code) {
      token
      name {
        familyName
        givenName
      }
      photos {
        url
      }
    }
  }
`;