import { OSMap } from './map';
import {
  Map,
  MapOptions,
  TileLayer,
  geoJSON,
  LatLng,
  circleMarker,
  markerClusterGroup,
  MarkerClusterGroup,
} from 'leaflet';
import 'leaflet.markercluster';
import { differenceWith, isEqual, concat } from 'lodash';

export class OSLeafletMap extends OSMap<Map> {
  private layers = {};
  private city = location.pathname.split('/')[2];

  public static init(): void {
    const container = document.getElementById('os-leaflet__map');

    if (container) {
      const options: MapOptions = {
        center: this.stringToCoordinates(container.dataset.center)
          ? this.stringToCoordinates(container.dataset.center)
          : [55.751244, 37.618423],
        zoom: 11,
      };

      const lefletMap = new Map(container, options);
      new OSLeafletMap(lefletMap);
    }
  }

  public constructor(leafletMap: Map) {
    super(leafletMap);

    new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }).addTo(this.map);

    this.getDots('crime');
  }

  public async getDots(layer: string) {
    this.layers[layer] = markerClusterGroup();
    console.log(this.layers);
    const res = await fetch(`/api/dots?city=${this.city}&layer=${layer}`);
    const resJson = await res.json();

    this.addGeoJsonToLayer(resJson, this.layers[layer]);
    this.map.addLayer(this.layers[layer]);
  }

  private addGeoJsonToLayer(dots, layer: MarkerClusterGroup) {
    const myStyle = {
      color: '#ff7800',
      weight: 5,
      opacity: 0.65,
    };
    const geojsonMarkerOptions = {
      radius: 8,
      fillColor: '#ff7800',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    };

    dots.forEach(feature => {
      geoJSON(feature, {
        style: myStyle,
        onEachFeature: (feature, layer) => {
          layer.bindPopup(`
            <h3>${feature.properties.address}</h3>
            <p>${feature.properties.description}</p>
            ${feature.properties.links.reduce((links, link, i) => {
              return links + `<a href='${link}' target='_blank'>Источник №${i + 1}</a></br>`;
            }, '')}
          `);
        },
        pointToLayer: (feature, latlng) => {
          return circleMarker(latlng, geojsonMarkerOptions);
        },
        coordsToLatLng: coords => {
          return new LatLng(coords[1], coords[0]);
        },
      }).addTo(layer);
    });
  }
}
