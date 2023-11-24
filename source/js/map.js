const mapContainer = document.querySelector('.contacts__map');
const mapImage = document.querySelector('.contacts__map-image-wrapper');
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 17;

mapContainer.removeAttribute('hidden');
mapImage.setAttribute('hidden', true);

const iconConfig = {
  url: '../img/map-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};

const cityCenter = {
  lat: 59.9386828707253,
  lng: 30.323021182473518,
};

const startCoordinate = {
  lat: 59.9386828707253,
  lng: 30.323021182473518,
};

const map = L.map('map').setView(cityCenter, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

const mainPinMarker = L.marker(startCoordinate, {
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});
