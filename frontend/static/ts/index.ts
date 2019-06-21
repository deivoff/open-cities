import './../stylus/main.styl';
import { OSLeafletMap } from '../../components/map/map-leaflet';

((): void => {
  [OSLeafletMap].forEach(block => block.init());
  console.log('youre faggot');
})();
