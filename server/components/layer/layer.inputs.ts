import { InputType, Field } from "type-graphql";
import { Layer } from ".";

@InputType()
export class LayerInput implements Partial<Layer> {
  @Field()
  name!: string;

  @Field()
  description?: string;
}