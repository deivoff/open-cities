import CityModel from './types';

export const getCityList = async () => {
  const citiesList = await CityModel.find(
    {},
    {
      _id: 0,
      __v: 0
    }
  );
  return citiesList;
};
