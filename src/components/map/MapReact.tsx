
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

export default function MapReact() {

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    alert(`Clicked at: ${lat}, ${lng}`);
  };

  const bangkok = {
  latitude: 13.7563,
  longitude: 100.5018,
};

  const mapOptions = {
    center: [bangkok.latitude, bangkok.longitude],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  const gistdaSphereUrl = "https://basemap.sphere.gistda.or.th/service?key=20609DC199F6417388A8F4AADE3DF512s&request=GetTile&version=1.0.0&layers=basemap_th&style=default&format=image/png&TileMatrixSet=EPSG%3A3857&TileMatrix={z}&TileRow={y}&TileCol={x}";

  return (
    <MapContainer {...mapOptions} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <TileLayer url={gistdaSphereUrl} /> */}
      <MapEventsHandler handleMapClick={handleMapClick} />
    </MapContainer>
  )
}

const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};