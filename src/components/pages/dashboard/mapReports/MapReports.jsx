import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import style from "./style.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import L from "leaflet";
import mediaOfChildrensForReports from "../../../../utils/mediaOfChildrensForReports";

const position = [-2.5387, -44.2825];
const bounds = [
  [0, -42], // Sudoeste
  [-4, -46], // Nordeste
];

const ClusterMarkers = ({ reports, filter }) => {
  const map = useMap();

  useEffect(() => {
    const markers = L.markerClusterGroup();
  
    reports.forEach((report) => {
      const latitude = parseFloat(
        report.coordinates.latitude.replace(/['"]/g, "")
      );
      const longitude = parseFloat(
        report.coordinates.longitude.replace(/['"]/g, "")
      );
  
      const childrenLength = report.childrens.length;
      const childrenMedia = mediaOfChildrensForReports(reports);
      let colorMarker = "green";
      if (childrenLength > childrenMedia / 2) colorMarker = "green";
      if (childrenLength > childrenMedia / 1.5) colorMarker = "orange";
      if (childrenLength > childrenMedia / 0.6) colorMarker = "red";
  
      const marker = L.circleMarker([latitude, longitude], {
        color: colorMarker,
        fillOpacity: 0.7,
      });
  
      markers.addLayer(marker);
    });
  
    // Limpa os marcadores antigos antes de adicionar os novos
    map.eachLayer((layer) => {
      if (layer instanceof L.MarkerClusterGroup) {
        map.removeLayer(layer);
      }
    });
  
    map.addLayer(markers);
  
    return () => {
      map.removeLayer(markers);
    };
  }, [map, reports]); // Adicionamos `filter` às dependências
  

  return null;
};

const MapReports = ({ reports }) => {
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={true}
      className={`${style.map__container}`}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 />
      <ClusterMarkers reports={reports} />
    </MapContainer>
  );
};

export default MapReports;
