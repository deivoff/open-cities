import { prop as Property, Typegoose, Ref, arrayProp as Properties } from '@hasezoey/typegoose';
import { ObjectType, ID, Field, InputType, Float, Int } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { User, UserType } from '../user';
import { Model, Document } from 'mongoose';
import { GeometryType, GeometryCoords, Position } from '.';
import { GraphQLJSON } from './../../helpers';
import { GeoJsonProperties } from 'geojson';
import { Layer } from '../layer';

@ObjectType()
@InputType('GeometryInput')
export class Geometry {
  @Field(type => GeometryType)
  @Property({ required: true, enum: GeometryType })
  type!: GeometryType;

  @Field(type => GeometryCoords)
  @Properties({ items: Array })
  coords!: Position | Position[] | Position[][] | Position[][];
}

@ObjectType()
export class Geo extends Typegoose {
  @Field(() => ID)
  readonly _id!: ObjectId;

  @Field(() => Date)
  readonly createdAt!: Date;

  @Field(() => Date)
  readonly updatedAt!: Date;

  @Field(() => User)
  @Property({ required: true, ref: User })
  author!: Ref<User>;

  @Field(() => Layer)
  @Property({ required: true, ref: Layer })
  layer!: Ref<Layer>;

  @Field(type => UserType)
  @Property({ required: true, enum: UserType })
  access!: UserType;

  @Field(type => Geometry)
  @Property({ required: true, _id: false })
  geometry!: Geometry;

  @Field(type => GraphQLJSON)
  @Property()
  properties?: GeoJsonProperties;
}

export class GeoSum extends Geo {
  @Field(() => Float)
  sum!: number;

  @Field(() => Int)
  geoObjects!: number;
}

export type GeoDocument = Geo & Document;
export type GeoModel = Model<GeoDocument>;
export const GeoModel: GeoModel = new Geo().getModelForClass(Geo, { schemaOptions: { timestamps: true } });
