import { OSMap } from './map';
import { Map, MapOptions, TileLayer, geoJSON, LatLng, circleMarker } from 'leaflet';
import { GeoJsonObject } from 'geojson';

const data: GeoJsonObject[] = [
  {
    type: 'Feature',
    properties: {
      evid: 1,
      ex_type: 'OGRAB',
      exident: 'ограбление организации',
      date: '2017/08/21',
      time: 'вечер',
      link: 'http://www.e1.ru/news/spool/news_id-475235.html',
      link2: null,
      descrip: 'Разгромили ювелирный магазин. Грабителей поймали на Пермской трассе.',
      address: 'ул. Пехотинцев, 5',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.554127199175156, 56.870147205686486],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 3,
      ex_type: 'PADOK',
      exident: 'падение из окна',
      date: '2017/08/26',
      time: 'утро',
      link: 'http://www.e1.ru/news/spool/news_id-475806.html',
      link2: null,
      descrip: 'Девушка выпала из окна многоэтажки на козырек подъезда. Жива, в реанимации.',
      address: 'ул. Викулова, д. 35',
      place: 'area',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.546799009180177, 56.833005065799256],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 4,
      ex_type: 'PADOK',
      exident: 'падение из окна',
      date: '2017/08/28',
      time: null,
      link: 'http://www.e1.ru/news/spool/news_id-475911.html',
      link2: null,
      descrip: 'Из окна многоэтажки выпала женщина. Криминала нет.',
      address: 'ул. Алтайская, д. 62',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.681506752856798, 56.782109073575647],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 5,
      ex_type: 'VANDL',
      exident: 'вандализм',
      date: '2017/01/03',
      time: 'ночь',
      link:
        'http://www.justmedia.ru/news/events/kommunalnye_vojny_huligany_izurodovali_rabochuyu_mashinu_upravlyayushhej_kompanii_ekaterinburga',
      link2: null,
      descrip: 'Разбиты стекла в машине УК «Лига ЖКХ», подбросили селедку.',
      address: 'пр. Ленина, д. 69/2',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.620533235527077, 56.841149587733845],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 7,
      ex_type: 'ANOML',
      exident: 'аномалия',
      date: '2017/09/06',
      time: 'ночь',
      link:
        'http://ngzt.ru/accidents/view/06-09-2017-v-aeroportu-ekaterinburga-ekipaj-samoleta-pytalis-oslepit-lazerom',
      link2: null,
      descrip: 'ослепление лазером пилота',
      address: 'аэропорт Кольцово',
      place: 'area',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.699919568955039, 56.753945370149367],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 8,
      ex_type: 'ANOML',
      exident: 'аномалия',
      date: '2017/09/06',
      time: 'ночь',
      link: 'http://www.e1.ru/news/spool/news_id-476583.html',
      link2: null,
      descrip: 'Безответственный хозяин привязывает коня на ночь к столбу на улице.',
      address: 'ул. Волгоградская, 86',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.577355161961933, 56.805123638723771],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 9,
      ex_type: 'TERCO',
      exident: 'территориальный конфликт',
      date: '2017/09/06',
      time: 'ночь',
      link: 'http://www.e1.ru/news/spool/news_id-476579.html',
      link2: null,
      descrip: 'Конфликт жильцов и детсада вокруг детской площадки во дворе новостройки.',
      address: 'ул. Ильича, д. 42Б',
      place: 'area',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.606256214479444, 56.894484286051814],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 10,
      ex_type: 'RAZBJ',
      exident: 'разбой, грабеж',
      date: '2017/09/07',
      time: 'ночь',
      link: 'http://www.e1.ru/news/spool/news_id-476598.html',
      link2: null,
      descrip: '13 неизвестных с битами избили охрану и похитили товар из Связного и Билайн.',
      address: 'ул. Амундсена, д. 65',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.580726849296703, 56.795876258226599],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 11,
      ex_type: 'OGRAB',
      exident: 'ограбление организации',
      date: '2017/09/08',
      time: '07:30:00',
      link: 'http://www.e1.ru/news/spool/news_id-476682.html',
      link2: null,
      descrip: 'Ограбили салон Евросеть.',
      address: 'ул. Белореченская, д. 28',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.562758182092786, 56.81675485116557],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 12,
      ex_type: 'PRCHE',
      exident: 'пропал человек',
      date: '2017/09/06',
      time: null,
      link: 'http://www.e1.ru/news/spool/news_id-476847.html',
      link2: null,
      descrip: 'Неизвестные похитили женщину и вымогают у её мужа деньги, угнали газель.',
      address: 'ул. Красных партизан, д. 1',
      place: 'area',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.589053185883238, 56.888990999702465],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 13,
      ex_type: 'PADOK',
      exident: 'падение из окна',
      date: '2017/09/11',
      time: null,
      link:
        'http://www.justmedia.ru/news/events/na_kolmogorova_39letnyaya_zhenshhina_vybrosilas_iz_okna_pyatogo_etazha',
      link2: null,
      descrip: 'Выпала с пятого этажа женщина, пыталась расцарапать себе горло. Госпитализирована.',
      address: 'ул. Колмогорова, д. 56',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.57140652456907, 56.849572554171267],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 14,
      ex_type: 'OGRAB',
      exident: 'ограбление организации',
      date: '2017/09/14',
      time: '04:25:00',
      link: 'http://vedomosti-ural.ru/news/60607/',
      link2: null,
      descrip: 'Ограбление салона сотовой связи.',
      address: 'ул. Викулова, д. 38/2',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.544797960165894, 56.83165305031126],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 15,
      ex_type: 'ANOML',
      exident: 'аномалия',
      date: '2017/09/13',
      time: '20:15:00',
      link: 'http://www.e1.ru/news/spool/news_id-477026.html',
      link2: null,
      descrip: 'Девушка провалилась в неогороженную яму возле стройки.',
      address: 'ул. Бебеля, д. 132А',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.554401272058655, 56.85451598618647],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 16,
      ex_type: 'OGRAB',
      exident: 'ограбление организации',
      date: '2017/09/18',
      time: '05:00:00',
      link: 'http://ngzt.ru/accidents/view/18-09-2017-v-ekaterinburge-snova-napali-na-salon-evroseti',
      link2: null,
      descrip: 'Ограбили салон Евросеть.',
      address: 'ул. Сухоложская, д. 4/1',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.611492413463857, 56.776113134879722],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 17,
      ex_type: 'VANDL',
      exident: 'вандализм',
      date: '2017/09/17',
      time: null,
      link: 'http://www.e1.ru/news/spool/news_id-477315.html',
      link2: null,
      descrip: 'Разбит гипсовый памятник «Папа, ты где?»',
      address: 'ул. Анучина, д. 6',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.819442129440205, 56.908883412076243],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 18,
      ex_type: 'NELEG',
      exident: 'нелегалы / задержания',
      date: '2017/09/21',
      time: null,
      link: 'http://www.e1.ru/news/spool/news_id-477606.html',
      link2: null,
      descrip: 'Омон арестовал нелегальных мигрантов, подделка документов.',
      address: 'ул. Завокзальная, д. 26',
      place: 'area',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.599939576440811, 56.865467135069515],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 19,
      ex_type: 'OGRAB',
      exident: 'ограбление организации',
      date: '2017/09/19',
      time: 'раннее утро',
      link: 'http://www.e1.ru/news/spool/news_id-477425.html',
      link2: null,
      descrip: 'ограбление салона Евросеть',
      address: 'ул. Латвийская, д. 18',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.777275290419261, 56.789105461968532],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 20,
      ex_type: 'TERCO',
      exident: 'территориальный конфликт',
      date: '2017/09/18',
      time: null,
      link: 'http://www.justmedia.ru/news/society/skandalnyj_sverdlovskij_ataman_ugrozhal_ekaterinburzhenke_video_foto',
      link2: null,
      descrip: 'конфликт жителей во дворе',
      address: 'ул. Радищева, д. 63',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.577240808345607, 56.826227748186959],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 21,
      ex_type: 'RAZBJ',
      exident: 'разбой, грабеж',
      date: '2017/09/29',
      time: 'день',
      link: 'http://www.e1.ru/news/spool/news_id-478205.html',
      link2: null,
      descrip: 'напали с ножом на оператора, отобрали карту памяти',
      address: 'пер. Теплоходный',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.539568955921915, 56.862475500466033],
    },
  },
  {
    type: 'Feature',
    properties: {
      evid: 23,
      ex_type: 'ANOML',
      exident: 'аномалия',
      date: '2017/10/18',
      time: 'ночь',
      link: 'http://www.e1.ru/news/spool/news_id-479493.html',
      link2: null,
      descrip: 'Неадекватная женщина на крыше перебудила соседей.',
      address: 'ул. Ильича, д. 6',
      place: 'point',
    },
    geometry: {
      type: 'Point',
      coordinates: [60.595798721043394, 56.887239066816484],
    },
  },
];

export class OSLeafletMap extends OSMap<Map> {
  public static init(): void {
    const container = document.getElementById('os-leaflet__map');

    if (container) {
      const options: MapOptions = {
        center: [56.887239066816484, 60.595798721043394],
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
      data.forEach(feature => {
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
      });
    }
  }
}
