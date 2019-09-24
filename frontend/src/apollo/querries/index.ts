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
    }
  }
`;