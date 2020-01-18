/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLayers
// ====================================================

export interface GetLayers_layers {
  __typename: "Layer";
  _id: string;
  name: string;
  description: string;
}

export interface GetLayers {
  layers: GetLayers_layers[];
}

export interface GetLayersVariables {
  city: string;
}
