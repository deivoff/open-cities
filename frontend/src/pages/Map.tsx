import React from 'react';
import { Helmet } from 'react-helmet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { MapControllers } from '../widgets';
import { Page } from '../components';

interface MapProps {
  city: string;
  cityName: string;
  center: [number, number];
  zoom: number;
}

export const MapPage: React.FC<MapProps> = ({ city, center, zoom, cityName }) => {
  return (
    <>
      <Helmet>
        <title>Открытые города | {cityName} </title>
      </Helmet>
      <Page.Map>
        <Map center={center} zoom={zoom} style={{ height: 'calc(100vh - 80px)' }}>
          <MapControllers defaultCity={city} />
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </Page.Map>
    </>
  );
};
