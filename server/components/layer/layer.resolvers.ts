import { Resolver, Query, Arg, Mutation, FieldResolver, Root, Ctx } from 'type-graphql';
import { Layer, LayerModel, LayerInput, LayerDocument } from '.';
import { User, UserModel, UserType } from '../user';
import { Geo, GeoModel } from '../geo';
import { Context } from './../../types';
import { checkAuth } from './../../middleware/auth';
import { DecodedToken } from '../auth';

@Resolver(of => Layer)
export class LayerResolvers {
  @Query(returns => [Layer])
  async layers(
    @Arg('city') city: string,
    @Ctx() { ctx }: { ctx: Context }
  ): Promise<Layer[]> {
    try {
      const { decodedUser } = ctx;
      if (decodedUser) {
        return(await LayerModel.find({ access: (decodedUser as DecodedToken).access, city }))
      }
      return (await LayerModel.find({ access: UserType.user, city }))!
    } catch (error) {
      throw error;
    }
  }

  @Mutation(returns => Layer)
  async createLayer(
    @Arg('layerInput', type => LayerInput) layerInput: LayerInput,
    @Ctx() { ctx }: { ctx: Context }
  ): Promise<Layer> {
    checkAuth(ctx);
    const layer = new LayerModel({
      ...layerInput,
      owner: ctx.state.decodedUser.id,
      access: ctx.state.decodedUser.access
    });
    try {
      const savedLayer = await layer.save();
      return savedLayer;
    } catch (err) {
      throw err;
    }
  }

  @FieldResolver(() => User)
  async owner(
    @Root() layer: LayerDocument
  ):Promise<User> { 
    try {
      const { owner } = layer;
      return (await UserModel.findById(owner))!;
    } catch (error) {
      throw error;
    }
  }

  @FieldResolver(() => [Geo])
  async geoCollection(
    @Root() layer: LayerDocument
  ): Promise<Geo[]> {
    try {
      const { _id } = layer;
      return (await GeoModel.find({ layer: String(_id) }))!;
    } catch (error) {
      throw error;
    }
  }
}