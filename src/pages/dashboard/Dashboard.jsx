import React, { useEffect, useState } from "react";
import style from "./style.module.css";

import CardInfo from "../../components/pages/dashboard/cardInfo/CardInfo";
import MapReports from "../../components/pages/dashboard/mapReports/MapReports";
import Filter from "../../components/filter/Filter";

import Ranking from "../../components/pages/dashboard/ranking/Ranking";

import useReports from "../../hooks/useReports";
import {
  getBairros,
  getUsersNotServed,
  getUsersServed,
} from "../../services/statistics";
import { ReportStatusEnum } from "../../utils/environment";

const Dashboard = () => {
  const { reports } = useReports();
  const [statusFilter, setStatusFilter] = useState([ReportStatusEnum.PENDENTE]);

  const handleFilterChange = (status) => {
    status === ReportStatusEnum.PENDENTE
      ? setStatusFilter([ReportStatusEnum.PENDENTE, ReportStatusEnum.AVALIADO])
      : setStatusFilter([ReportStatusEnum.CONCLUIDO]); // Apenas CONCLUIDO
  };

  // Filtra os reports com base no filtro
  let filteredReports = statusFilter
    ? reports.filter((report) => statusFilter.includes(report.status))
    : reports;

  return (
    <div className={`${style.dashboard}`}>
      <ul>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Total de Ocorrências"}
            value={reports.length}
            incrementValue={20}
          />
        </li>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Bairros Catalogados"}
            value={getBairros(reports).bairros.length}
            incrementValue={20}
          />
        </li>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Usuários atendidos"}
            value={getUsersServed(reports).length}
            incrementValue={-20}
          />
        </li>
        <li className={`${style.dash__box__info}`}>
          <CardInfo
            title={"Usuários não atendidos"}
            value={getUsersNotServed(reports).length}
            incrementValue={-20}
          />
        </li>
      </ul>

      <main className={`${style.dash__mapper}`}>
        <Filter onFilterChange={handleFilterChange} filter={statusFilter} />

        <div className={`${style.map__bg}`}>
          <div className={`${style.map__container}`}>
            <h1 className="font-s c4">
              Mapa De Ocorrências que não foram resolvidas
            </h1>
            <MapReports reports={filteredReports} />
          </div>

          <Ranking rank={getBairros(reports).rank} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
