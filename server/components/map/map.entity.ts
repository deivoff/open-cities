import {
  prop as Property,
  Typegoose,
  Ref,
  arrayProp as Properties
} from '@hasezoey/typegoose';
import { Model, Document } from 'mongoose';
import { User, UserType } from '../user';
import { ID, Field, Int } from 'type-graphql';
import { ObjectId } from 'mongodb';

// eslint-disable-next-line no-shadow
export class Map extends Typegoose {
  @Field(() => ID)
  readonly _id!: ObjectId;

  @Field(() => Date)
  readonly createdAt!: Date;

  @Field(() => Date)
  readonly updatedAt!: Date;

  @Field()
  @Property({ required: true })
  name!: string;

  @Field(() => User)
  @Property({ required: true, ref: User })
  owner!: Ref<User>;

  @Field(() => [User])
  @Properties({ itemsRef: User })
  subscribers!: Ref<User>[];

  @Field()
  @Property()
  geoSettings!: string;

  @Property()
  constants: any;

  @Field()
  @Property()
  description!: string;

  @Property()
  tags!: string[];

  @Field(() => Boolean)
  @Property()
  draft!: boolean;

  @Field(type => UserType)
  @Property({ required: true, enum: UserType })
  access!: UserType;
}

export type MapDocument = Map & Document;
export type MapModel = Model<MapDocument>;
export const MapModel: MapModel = new Map().getModelForClass(Map, { schemaOptions: { timestamps: true } });