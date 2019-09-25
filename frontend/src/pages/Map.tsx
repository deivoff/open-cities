import React from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../components/layout';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


export const MapPage = () => {
  const position: [number, number] = [57.153033, 65.534328];
  return (
    <>
      <Helmet>
        <title>Открытые города | Карта </title>
      </Helmet>
      <Page.Map>
        <Map center={position} zoom={13} style={{height: "calc(100vh - 80px)"}} >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      </Page.Map>
    </>
  )
}