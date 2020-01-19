import { Resolver, Query } from 'type-graphql';
import { City, CityModel } from '.';

@Resolver(of => City)
export class CityResolvers {
  @Query(returns => [City])
  async cities(): Promise<City[]> {
    try {
      return await CityModel.find();
    } catch (error) {
      throw error;
    }
  }
}
