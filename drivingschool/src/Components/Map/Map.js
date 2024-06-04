// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for missing marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const locations = [
  { coords: [18.67, 77.069], city: 'Delhi' },
  { coords: [19.076, 72.877], city: 'Mumbai' },
  { coords: [14.167, 75.040], city: 'Bangalore' },
  { coords: [26.540, 77.069], city: 'Jaipur' },
  { coords: [27.67, 78.719], city: 'Gangtok' }
];

const MapComponent = () => {
  return (
    <div>
      <h1 style={{ padding: "20px" }}>Example Map with Multiple Markers</h1>
      <p style={{ padding: "20px" }}>
        This map displays multiple cities in India with markers.
      </p>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "80vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, idx) => (
          <Marker key={idx} position={location.coords}>
            <Popup>
              {location.city}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
