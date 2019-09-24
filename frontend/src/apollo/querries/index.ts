import { gql } from "apollo-boost";

export const GET_GOOGLE_REDIRECT_URL = gql`
  {
    getGoogleOAuthRedirect {
      url
    }
  }
`;