import { Resolver, Mutation, Arg, Ctx, Query, FieldResolver, Root } from "type-graphql";
import { GeoInput, Geo, GeoModel, GeoDocument } from ".";
import { User, UserModel, UserType } from '../user';
import { Layer, LayerModel } from "../layer";
import { Context } from "./../../types";
import { checkAuth } from "./../../middleware/auth";

@Resolver(of => Geo)
export class GeoResolvers{
  @Query(returns => [Geo])
  async geos(): Promise<Geo[]> {
    try {
      console.log(await GeoModel.find());
      return (await GeoModel.find())
    } catch (error) {
      throw error;
    }
  }

  @Mutation(returns => Geo)
  async createGeo(
    @Arg('geoInput', type => GeoInput) { properties, geometry, layer }: GeoInput,
    @Ctx() { ctx }: { ctx: Context }
  ): Promise<Geo> {
    checkAuth(ctx);
    const { decodedUser } = ctx.state;
    const geo = new GeoModel({
      properties,
      geometry,
      layer,
      author: decodedUser!.id,
      access: decodedUser!.access,
    });
    try {
      const savedGeo = await geo.save();
      return savedGeo;
    } catch (err) {
      throw err;
    }
  }

  @FieldResolver(() => User)
  async author(
    @Root() geo: GeoDocument
  ):Promise<User> { 
    try {
      const { author } = geo;
      return (await UserModel.findById(author))!;
    } catch (error) {
      throw error;
    }
  }

  @FieldResolver(() => Layer)
  async layer(
    @Root() geo: GeoDocument
    ):Promise<Layer> { 
      try {
        const { layer } = geo;
        console.log(layer);
        return (await LayerModel.findById(layer))!;
      } catch (error) {
        throw error;
      }
    }
}