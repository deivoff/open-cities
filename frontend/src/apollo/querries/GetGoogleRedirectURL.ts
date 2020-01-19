import { gql } from 'apollo-boost';
export * from './types/GetGoogleRedirectURL';

export const GET_GOOGLE_REDIRECT_URL = gql`
  query GetGoogleRedirectURL {
    getGoogleOAuthRedirect {
      url
    }
  }
`;
