import React from 'react';
import Head from 'next/head';

import { connect } from 'react-redux';
import { withSSR } from '../utils/_ssr';
import { ICitySchema } from '../server/components/city/types';

interface ICityScreenProps {
  cities?: ICitySchema[];
  city?: ICitySchema;
}

const mapStateToProps = ({ cities }: any) => {
  return {
    cities
  };
};

const CityScreen = ({ city, cities }: ICityScreenProps) => {
  const currentCity = cities
    ? cities.find(cityInArray => {
        if (city) {
          if (cityInArray.url === city.url) {
            return true;
          }
          return false;
        }
        return false;
      })
    : {
        name: 'Город 404'
      };
  return (
    <>
      <Head>
        <title>
          Открытые города | {currentCity ? currentCity.name : 'Город 404'}
        </title>
      </Head>
    </>
  );
};

export default withSSR()(connect(mapStateToProps)(CityScreen));
