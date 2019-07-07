import { OSMap } from './map';
import {
  Map,
  MapOptions,
  TileLayer,
  geoJSON,
  circleMarker,
  markerClusterGroup,
  MarkerClusterGroup,
  layerGroup,
  control,
} from 'leaflet';
import 'leaflet.markercluster';
import { IGeoSchema } from './../../../src/interfaces/IGeo';
import { deepArrayReverse } from '../../../src/helpers/array';

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

    Promise.all([
      this.getPolygons('district'),
      this.getDots('crime')
    ]).then(() => control.layers({}, this.layers, {
      hideSingleBase: true,
      collapsed: false,
    }).addTo(this.map))
  }

  public async getPolygons(layer: string) {
    const polygons = await this.geoFetch(layer, 'Polygon');

    if (polygons.length) {
      const leafletPolygons = polygons.map(feature => {
        feature.geometry.coordinates = deepArrayReverse(feature.geometry.coordinates, true);
        return geoJSON(feature, {
          style: {
            fillOpacity: 0.05,
            stroke: true,
            weight: 1,
            fillColor: this.getRandomColor(),
            color: this.getRandomColor(),
          },
          onEachFeature: (feature, layer) => {
            layer.bindPopup(`
              <h3>${feature.properties.name}</h3>
              <p>Процент доступности среды: ${this.getRandomPersent()}%</p>
              <p>Процент аварийного жилья: ${this.getRandomPersent()}%</p>
              <p>Процент количества ДТП относительно ДТП в городе: ${this.getRandomPersent()}%</p>
            `);
          },
        });
      });
      this.layers[layer] = layerGroup(leafletPolygons);
    }

  }

  private getRandomPersent() {
    return Math.floor(Math.random() * 100) + 1
  }

  public async getDots(layer: string) {
    const dots = await this.geoFetch(layer, 'Point');

    if (dots.length) {
      this.layers[layer] = markerClusterGroup();
      this.addGeoJsonToLayer(dots, this.layers[layer]);
    }
  }

  private async geoFetch(layer: string, type: string) {
    const res = await fetch(`/api/geo?city=${this.city}&layer=${layer}&type=${type}`);
    return await res.json();
  }

  private getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
          return deepArrayReverse(coords);
        },
      }).addTo(layer);
    });
  }
}
