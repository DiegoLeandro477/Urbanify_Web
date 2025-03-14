import React, { useState } from "react";
import style from "./style.module.css";

import CardInfo from "../../components/dashboard/cardInfo/CardInfo";
import MapReports from "../../components/dashboard/mapReports/MapReports";
import FilterServerity from "../../components/dashboard/filterServerity/FilterSeverity";
import DateRanger from "../../components/dashboard/dateRanger/DateRanger";
import Ranking from "../../components/dashboard/ranking/Ranking";

import useReports from "../../hooks/useReports";

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

  return (
    <div className={`${style.dashboard}`}>
      <ul>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Total de Ocorrências"}
            value={totalOcorrencias(reports)}
            incrementValue={20}
          />
        </li>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Bairros Catalogados"}
            value={24.15}
            incrementValue={20}
          />
        </li>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Usuários atendidos"}
            value={24.15}
            incrementValue={-20}
          />
        </li>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Usuários não atendidos"}
            value={24.15}
            incrementValue={-20}
          />
        </li>
      </ul>

      <main className={`${style.dash__mapper}`}>
        <div className={`${style.dash__filter}`}>
          <div className={`font-m c4 ${style.filter__PR}`}>
            <span
              className={` ${
                [ReportStatus.PENDENTE, ReportStatus.AVALIADO].some((status) =>
                  filter.includes(status)
                )
                  ? style.selected
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
                  ? style.selected
                  : ""
              }`}
              onClick={() => handleFilterChange(ReportStatus.CONCLUIDO)}
            >
              Resolvidos
            </span>
          </div>

          <FilterServerity />

          <DateRanger />
        </div>
        <div className={`${style.map__bg}`}>
          <div className={`${style.map__container}`}>
            <h1 className="font-s c4">
              Mapa De Ocorrências que não foram resolvidas
            </h1>
            <MapReports reports={reports} filter={filter} />
          </div>

          <Ranking />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
