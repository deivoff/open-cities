import CityModel from './types';

export const getCityList = async () => {
  return CityModel.find(
    {},
    {
      _id: 0,
      __v: 0
    }
  );
};
