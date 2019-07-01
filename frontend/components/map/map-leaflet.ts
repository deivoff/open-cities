import { OSMap } from './map';
import { Map, MapOptions, TileLayer, geoJSON, LatLng, circleMarker } from 'leaflet';
import { differenceWith, isEqual, concat } from 'lodash';

export class OSLeafletMap extends OSMap<Map> {
  private data: any = [];

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

    this.map.on('moveend', async () => {
      const res = await fetch(`http://open-cities.ru/api/maps/dots?city=ekb&polygon=${this.getMapBoxCoords()}`);
      const resJson = await res.json();
      let dataIsExist = true;
      if (!this.data.length) {
        dataIsExist = false;
      }
      const diff = differenceWith(resJson, this.data, isEqual);
      this.data = concat(this.data, ...diff);

      if (dataIsExist) {
        this.addGeoJsonToMap(diff);
      } else {
        this.addGeoJsonToMap(this.data);
      }
    });
  }

  private getMapBoxCoords() {
    const sizes = this.map.getBounds();
    const southWest = [sizes.getSouthWest().lng, sizes.getSouthWest().lat];
    const northEast = [sizes.getNorthEast().lng, sizes.getNorthEast().lat];
    return [southWest, northEast];
  }

  private addGeoJsonToMap(dots): OSLeafletMap {
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
          layer.bindPopup(`<h3>${feature.properties.address}</h3><p>${feature.properties.descrip}</p>`);
        },
        pointToLayer: (feature, latlng) => {
          return circleMarker(latlng, geojsonMarkerOptions);
        },
        coordsToLatLng: coords => {
          return new LatLng(coords[1], coords[0]);
        },
      }).addTo(this.map);
    });
    return this;
  }
}
