import { gql } from 'apollo-boost';
export * from './types/AuthGoogle';

export const AUTH_GOOGLE = gql`
  mutation AuthGoogle($code: String!) {
    authGoogle(code: $code) {
      token
    }
  }
`;
