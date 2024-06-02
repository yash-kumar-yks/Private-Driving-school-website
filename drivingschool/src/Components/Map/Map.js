import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';

// Sample data for store locations
const stores = [
  { id: 1, name: 'Store 1', position: [51.505, -0.09] },
  { id: 2, name: 'Store 2', position: [51.515, -0.1] },
  { id: 3, name: 'Store 3', position: [51.525, -0.12] }
];

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stores.map(store => (
        <Marker key={store.id} position={store.position} icon={customIcon}>
          <Popup>
            <b>{store.name}</b><br />Latitude: {store.position[0]}, Longitude: {store.position[1]}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
