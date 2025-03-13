import React from "react";
import { MapContainer, Circle, TileLayer } from "react-leaflet";
import Supercluster from "supercluster"; // Biblioteca para agrupamento
import "leaflet/dist/leaflet.css";
import "./styles.css";
// import { reports } from "../../../../data"; // Importando os dados dos marcadoresg
import { reports } from "../../../../reports"; // Importa os reports

const position = [-2.5387, -44.2825];
const bounds = [
  [-2.6, -44.35], // Sudoeste
  [-2.45, -44.15], // Nordeste
];
const MapReports = () => {
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={true}
      className="map-container"
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Adicionando círculos para cada report */}
      {reports.map((report, index) => {
        const lat = parseFloat(
          report.coordinates.latitude.replace(/['"]/g, "")
        );
        const lng = parseFloat(
          report.coordinates.longitude.replace(/['"]/g, "")
        );

        return (
          <Circle
            key={index}
            center={[lat, lng]}
            radius={50} // Ajuste o raio conforme necessário
            pathOptions={{
              color: "none",
              fillColor: "red",
              fillOpacity: 0.6,
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default MapReports;
