/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCities
// ====================================================

export interface GetCities_cities {
  __typename: "City";
  name: string;
  url: string;
  center: any;
  zoom: number;
}

export interface GetCities {
  cities: GetCities_cities[];
}
