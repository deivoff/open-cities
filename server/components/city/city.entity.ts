import { ObjectType, Field, ID, Int } from "type-graphql";
import { Typegoose, prop as Property, arrayProp as Properties } from "@hasezoey/typegoose";
import { Model, Document } from "mongoose";
import { ObjectId } from "mongodb";
import { GeometryCoords } from "../geo";

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

  @Field(type => GeometryCoords)
  @Properties({ items: Array })
  center!: Position

  @Field(type => Int)
  @Property({ required: true })
  zoom!: number;
}


export type CityDocument = City & Document;
export type CityModel = Model<CityDocument>;
export const CityModel: CityModel = new City().getModelForClass(City);