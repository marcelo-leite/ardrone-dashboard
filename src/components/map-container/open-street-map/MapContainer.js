import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./style.css";


function MapBox() {
  return (
    <MapContainer
      className="markercluster-map"
      center={[-5.491179, -47.495673]}
      zoom={16}
      maxZoom={30}
      zoomControl={false} 
      style={{zIndex: 1}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapBox;
