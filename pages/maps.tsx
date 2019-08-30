/* eslint-disable global-require */
import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { H1, Page } from '../frontend/components/layout';
import { IUserSchema } from '../server/components/user/types';
import { IGlobalStore } from '../frontend/store';

// import { connect } from 'react-redux';
interface IMapsProps {
  profile?: IUserSchema;
}

const mapStateToProps = ({ profile }: IGlobalStore) => {
  return {
    profile
  };
};

const OSMap = () => {
  const lat = 51.505;
  const lng = -0.09;
  const zoom = 13;
  const position: [number, number] = [lat, lng];
  if (typeof window !== 'undefined') {
    const { Map, TileLayer, Marker, Popup } = require('react-leaflet');
    return (
      <Map center={position} zoom={zoom} style={{ height: '1000px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  } else {
    return null;
  }
};

const MapsScreen = ({ profile }: IMapsProps) => {
  return (
    <>
      <Head>
        <title>Открытые города | Мои карты</title>
      </Head>
      <Page.Wrapper>
        {JSON.stringify(profile) !== '{}' ? (
          <>
            <H1>Мои карты</H1>
            <OSMap />
          </>
        ) : (
          <H1>Вы не авторизованы в сервисе</H1>
        )}
      </Page.Wrapper>
    </>
  );
};

export default connect(mapStateToProps)(MapsScreen);
