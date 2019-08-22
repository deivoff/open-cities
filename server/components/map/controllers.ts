import MapModel from './types';

export const getUserMapList = async () => {
  const MapList = await MapModel.find(
    {},
    {
      _id: 0,
      __v: 0
    }
  );
  return MapList;
};
