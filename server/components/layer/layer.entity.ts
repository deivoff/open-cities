import {
  prop as Property,
  Typegoose,
  Ref,
  arrayProp as Properties
} from '@hasezoey/typegoose';
import { ObjectType, Field, ID } from "type-graphql";
import { ObjectId } from 'mongodb';
import { User } from '../user';
import { Geo } from '../geo';
import { Model, Document } from 'mongoose';

@ObjectType()
export class Layer extends Typegoose{
  @Field(() => ID)
  readonly _id!: ObjectId;

  @Field(() => Date)
  readonly createdAt!: Date;

  @Field(() => Date)
  readonly updatedAt!: Date;

  @Field()
  @Property({ required: true})
  name!: string;

  @Field()
  @Property()
  description!: string;

  @Field(() => User)
  @Property({ required: true, ref: User })
  owner!: Ref<User>;

  @Field(() => [User])
  @Properties({ itemsRef: { name: 'User' } })
  subscribers?: Ref<User[]>

  @Field(() => [Geo])
  geoCollection?: Ref<Geo[]>
}


export type LayerDocument = Layer & Document;
export type LayerModel = Model<LayerDocument>;
export const LayerModel: LayerModel = new Layer().getModelForClass(Layer, { schemaOptions: { timestamps: true } });