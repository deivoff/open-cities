import { InputType, Field, ID } from 'type-graphql';
import { GeoJsonProperties } from 'geojson';
import { Geo, Geometry } from '.';
import { GraphQLJSON } from './../../helpers';
import { Layer } from '../layer';

@InputType()
export class GeoInput implements Partial<Geo> {
  @Field(() => Geometry)
  geometry!: Geometry;

  @Field(() => GraphQLJSON)
  properties!: GeoJsonProperties;

  @Field(() => ID)
  layer!: Layer;
}
