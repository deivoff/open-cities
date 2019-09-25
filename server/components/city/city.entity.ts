import { ObjectType, Field, ID } from "type-graphql";
import { Typegoose, prop as Property } from "@hasezoey/typegoose";
import { Model, Document } from "mongoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class City extends Typegoose {
  @Field(() => ID)
  readonly _id!: ObjectId;

  @Field()
  @Property({ required: true })
  name!: string;

  @Field()
  @Property({ required: true })
  url!: string;

  @Field()
  @Property({ required: true })
  photo!: string;
}

export type CityDocument = City & Document;
export type CityModel = Model<CityDocument>;
export const CityModel: CityModel = new City().getModelForClass(City);