import { OSMap } from './map';
import { Map, MapOptions, TileLayer, geoJSON, LatLng, circleMarker } from 'leaflet';
import { GeoJsonObject } from 'geojson';

export class OSLeafletMap extends OSMap<Map> {
  public static init(): void {
    const container = document.getElementById('os-leaflet__map');

    if (container) {
      const options: MapOptions = {
        center: this.stringToCoordinates(container.dataset.center)
          ? this.stringToCoordinates(container.dataset.center)
          : [56.887239066816484, 60.595798721043394],
        zoom: 13,
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

    if (location.pathname === '/maps/ekb') {
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
      /* data.forEach(feature => {
        console.log(feature);

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
      }); */
    }
  }
}
