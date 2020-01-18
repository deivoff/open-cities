/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AuthGoogle
// ====================================================

export interface AuthGoogle_authGoogle {
  __typename: "AuthResponse";
  token: string;
}

export interface AuthGoogle {
  authGoogle: AuthGoogle_authGoogle;
}

export interface AuthGoogleVariables {
  code: string;
}
