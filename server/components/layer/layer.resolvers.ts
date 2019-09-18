import { Resolver, Query, Arg, Mutation, FieldResolver, Root } from 'type-graphql';
import { Layer, LayerModel, LayerInput, LayerDocument } from '.';
import { User, UserModel } from '../user';
import { Geo, GeoModel } from '../geo';

@Resolver(of => Layer)
export class LayerResolvers {
  @Query(returns => [Layer])
  async layers(
    @Arg('userID', type => String) userID: string
  ): Promise<Layer[]> {
    try {
      return (await LayerModel.find({ owner: userID }))!
    } catch (error) {
      throw error;
    }
  }

  @Mutation(returns => Layer)
  async createLayer(
    @Arg('layerInput', type => LayerInput) layerInput: LayerInput
  ): Promise<Layer> {
    const layer = new LayerModel({
      ...layerInput,
      owner: '5d807c3f29e7697ac18cf66f',
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