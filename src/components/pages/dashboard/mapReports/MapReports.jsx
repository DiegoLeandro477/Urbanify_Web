import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import style from "./style.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import L from "leaflet";
import mediaOfChildrensForReports from "../../../../utils/mediaOfChildrensForReports";
import { useNavigate } from "react-router-dom";
import Search from "./search/Search";

const MapReports = ({ reports }) => {
  const [coordinates, setCoordinates] = React.useState({});
  const [position] = React.useState([-2.5387, -44.2825]);
  const [bounds] = React.useState([
    [0, -42], // Sudoeste
    [-4, -46], // Nordeste
  ]);

  const ClusterMarkers = ({ reports }) => {
    const map = useMap();

    const navigate = useNavigate(); // Use useNavigate para redirecionar

    React.useEffect(() => {
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

        // Adiciona um evento de clique para redirecionar ao report
        marker.on("click", () => {
          navigate(`/management/${report.id}`);
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
    }, [map, reports]);

    React.useEffect(() => {
      if (!coordinates.lat || !coordinates.lon) return;
      const { lat, lon } = coordinates;
      console.log(lat, lon);

      map.setView([lat, lon], 16, { animate: true, duration: 1.5 });
    }, [coordinates]);

    return null;
  };

  return (
    <div className={`${style.map__container}`}>
      <Search setCoordinates={setCoordinates} />

      <MapContainer
        className={`${style.map__display}`}
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ClusterMarkers reports={reports} />
      </MapContainer>
    </div>
  );
};

export default MapReports;
