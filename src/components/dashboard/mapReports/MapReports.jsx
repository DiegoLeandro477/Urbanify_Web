import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import L from "leaflet";
import { reports } from "../../../../reports";
import mediaOfChildrensForReports from "../../../utils/mediaOfChildrensForReports";

const position = [-2.5387, -44.2825];
const bounds = [
  [0, -42], // Sudoeste
  [-4, -46], // Nordeste
];

const childrenMedia = mediaOfChildrensForReports(reports);

const ClusterMarkers = ({ reports }) => {
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
      let colorMarker = "blue";
      if (childrenLength > childrenMedia / 2) colorMarker = "yellow";
      if (childrenLength > childrenMedia / 1.5) colorMarker = "orange";
      if (childrenLength > childrenMedia / 0.6) colorMarker = "red";

      const marker = L.circleMarker([latitude, longitude], {
        color: colorMarker,
        fillOpacity: 0.7,
      });

      markers.addLayer(marker);
    });

    map.addLayer(markers);

    return () => {
      map.removeLayer(markers);
    };
  }, [map, reports]);

  return null;
};

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
      <ClusterMarkers reports={reports} />
    </MapContainer>
  );
};

export default MapReports;
