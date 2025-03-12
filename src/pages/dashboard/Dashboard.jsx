import React, { useEffect, useState } from "react";
import MapReports from "../../components/mapReports/MapReports";
import "./styles.css";
import useReports from "../../hooks/useReports";
import CardInfo from "../../components/cardInfo/CardInfo";
import { totalOcorrencias } from "../../services/statistics";
import { ReportStatus } from "../../utils/StatusEnum";

const Dashboard = () => {
  const [filter, setFilter] = useState([ReportStatus.PENDENTE]);
  const { reports } = useReports();

  const handleFilterChange = (status) => {
    console.log("Mudando para: ", status);
    status === ReportStatus.PENDENTE
      ? setFilter([ReportStatus.PENDENTE, ReportStatus.AVALIADO])
      : setFilter([ReportStatus.CONCLUIDO]); // Apenas CONCLUIDO
  };
  useEffect(() => {
    console.log(
      "asfd",
      [ReportStatus.CONCLUIDO].some((status) => filter.includes(status))
        ? "selected"
        : ""
    );
  }, [filter]);

  return (
    <div className="dashboard">
      <ul>
        <li className="dash-box-info">
          <CardInfo
            title={"Total de Ocorrências"}
            value={totalOcorrencias(reports)}
            incrementValue={`Acressimo de 20%`}
          />
        </li>
        <li className="dash-box-info">
          <CardInfo
            title={"Bairros Catalogados"}
            value={24.15}
            incrementValue={`Acressimo de 20%`}
          />
        </li>
        <li className="dash-box-info">
          <CardInfo
            title={"Usuários atendidos"}
            value={24.15}
            incrementValue={`Acressimo de 20%`}
          />
        </li>
        <li className="dash-box-info">
          <CardInfo
            title={"Usuários não atendidos"}
            value={24.15}
            incrementValue={`Acressimo de 20%`}
          />
        </li>
      </ul>

      <main className="dash-mapper">
        <div className="dash-filter">
          <div className="filter-PR font-m c4">
            <span
              className={` ${
                [ReportStatus.PENDENTE, ReportStatus.AVALIADO].some((status) =>
                  filter.includes(status)
                )
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleFilterChange(ReportStatus.PENDENTE)}
            >
              Pendentes
            </span>
            <span
              className={` ${
                [ReportStatus.CONCLUIDO].some((status) =>
                  filter.includes(status)
                )
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleFilterChange(ReportStatus.CONCLUIDO)}
            >
              Resolvidos
            </span>
          </div>
          <div className="filter-severity">
            <ul>
              <li>Todas ocorrências</li>
              <li>Somente graves</li>
              <li>Somente moderados</li>
            </ul>
          </div>
          <div className="filter-data">
            <input type="date" name="dateInitial" id="dateInitial" />
            <span> --) </span>
            <input type="date" name="dateInitial" id="dateInitial" />
          </div>
        </div>
        <div className="map-bg">
          <div className="map-container">
            <h1 className="font-s c4">
              Mapa De Ocorrências que não foram resolvidas
            </h1>
            <MapReports reports={reports} filter={filter} />
          </div>
          <div className="map-info">
            <h1 className="font-s c4">Bairros mais reportados</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
