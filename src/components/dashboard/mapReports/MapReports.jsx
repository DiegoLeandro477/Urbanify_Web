import React, { useState, useEffect } from "react";
import { MapContainer, Circle, TileLayer, useMap } from "react-leaflet";
import Supercluster from "supercluster"; // Biblioteca para agrupamento
import "leaflet/dist/leaflet.css";
import "./styles.css";
// import { markers } from "../../../../data"; // Importando os dados dos marcadores

const position = [-2.5387, -44.2825];
const bounds = [
  [-2.6, -44.35], // Sudoeste
  [-2.45, -44.15], // Nordeste
];

// 📌 Função que agrupa os círculos usando Supercluster
const ClusterCircles = ({ points }) => {
  const map = useMap();
  const [clusters, setClusters] = useState([]);

  // Criando o Supercluster
  const supercluster = new Supercluster({
    radius: 20, // Quanto maior, mais cedo os pontos se agrupam
    maxZoom: 15, // Zoom máximo antes de desagrupar
  });

  // Convertendo os pontos para GeoJSON
  const geojsonData = {
    type: "FeatureCollection",
    features: points.map((point) => ({
      type: "Feature",
      properties: { id: point.id },
      geometry: {
        type: "Point",
        coordinates: [point.coordinates.longitude, point.coordinates.latitude],
      },
    })),
  };

  // Carregando os dados no Supercluster
  supercluster.load(geojsonData.features);

  // Atualiza os clusters ao mudar o zoom
  useEffect(() => {
    const updateClusters = () => {
      const zoom = map.getZoom();
      const bounds = map.getBounds();
      const clusters = supercluster.getClusters(
        [
          bounds.getWest(),
          bounds.getSouth(),
          bounds.getEast(),
          bounds.getNorth(),
        ],
        zoom
      );
      setClusters(clusters);
    };

    updateClusters();
    map.on("zoomend", updateClusters);
    return () => {
      map.off("zoomend", updateClusters);
    };
  }, [map]);

  return (
    <>
      {clusters.map((cluster, index) => {
        const [lng, lat] = cluster.geometry.coordinates;
        const isCluster = cluster.properties.cluster;
        const count = cluster.properties.point_count || 1;
        const radius = isCluster ? count * 50 : 50; // Se for um cluster, aumenta o círculo

        return (
          <Circle
            key={index}
            center={[lat, lng]}
            radius={radius}
            pathOptions={{
              color: "none",
              fillColor: "red",
              fillOpacity: 0.6,
            }}
          />
        );
      })}
    </>
  );
};

const MapReports = ({ reports }) => {
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

      {/* Chamando o componente que agrupa os círculos */}
      <ClusterCircles points={reports} />
    </MapContainer>
  );
};

export default MapReports;
