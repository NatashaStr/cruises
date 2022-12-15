const mapContainer = document.querySelector('#map');
const DEFAULT_COORDINATES = [59.938635, 30.323118];
const DEFAULT_ZOOM = 15.5;
const PIN_SIZE = [18, 22];
const PIN_OFSET_SIZE = [-18, -22];

const initMap = () => {
  mapContainer.innerHTML = '';
  createMap();
};

const createMap = () => {
  let myMap;
  let myPlaceMark;
  ymaps.ready(init);
  function init() {
    myMap = new ymaps.Map(mapContainer, {
      center: DEFAULT_COORDINATES,
      zoom: DEFAULT_ZOOM,
    });

    myPlaceMark = new ymaps.Placemark(DEFAULT_COORDINATES, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/map-anchor.svg',
      iconImageSize: PIN_SIZE,
      iconImageOffset: PIN_OFSET_SIZE,
    });

    myMap.geoObjects.add(myPlaceMark);
  }
};

export {initMap};
