import { gql } from "apollo-boost";

export const AUTH_GOOGLE = gql`
  mutation AuthGoogle($code: String!){
    authGoogle(code: $code) {
      id
      email
    }
  }
`;