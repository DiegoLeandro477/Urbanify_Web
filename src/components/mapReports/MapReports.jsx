import React from "react";
import { MapContainer, Circle, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { markers } from "../../../data";

const MapReports = () => {
  const position = [-2.5387, -44.2825];
  const bounds = [
    [-2.6, -44.35], // Sudoeste (canto inferior esquerdo)
    [-2.45, -44.15], // Nordeste (canto superior direito)
  ];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="map-container"
      maxBounds={bounds} // Define a área limitada
      maxBoundsViscosity={1.0} // Mantém o usuário dentro dos limites
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Renderizando círculos e marcadores */}
      {markers.map((marker) => (
        <React.Fragment key={marker.id}>
          {/* Círculo ao redor do marcador */}
          <Circle
            center={{
              lat: marker.coordinates.latitude,
              lng: marker.coordinates.longitude,
            }}
            radius={50}
            pathOptions={{ color: "none", fillColor: "red", fillOpacity: 0.6 }}
          />
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default MapReports;
