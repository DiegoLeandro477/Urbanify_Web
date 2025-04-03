import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

import CardInfo from "../../components/pages/dashboard/cardInfo/CardInfo";
import MapReports from "../../components/pages/dashboard/mapReports/MapReports";
import Filter from "../../components/filter/Filter";

import Ranking from "../../components/pages/dashboard/ranking/Ranking";

import useUsers from "../../hooks/useUsers";
import useReports from "../../hooks/useReports";
import {
  totalReports,
  getBairros,
  getUsersServed,
  getUsersNotServed,
} from "../../services/statistics";
import { filterSeverityEnum, ReportStatusEnum } from "../../utils/environment";

const Dashboard = () => {
  const { users } = useUsers();
  const { reports } = useReports();
  const [filterStatus, setFilterStatus] = useState([ReportStatusEnum.PENDENTE]);
  const [filterSeverity, setFilterSeverity] = useState(filterSeverityEnum.ALL);

  // Primeiro filtra os reports com base no status
  const reports_filtered = filterStatus
    ? reports.filter((report) => filterStatus.includes(report.status))
    : reports;

  // Segundo filtro dos reports com base no severity
  const filter_Severity_Reports =
    filterSeverity != filterSeverityEnum.ALL
      ? reports_filtered.filter((report) => {
          let cont_severity = [0, 0];
          report.childrens.forEach((element) => {
            cont_severity[element.severity] += 1;
          });
          if (cont_severity[0] >= cont_severity[1])
            return filterSeverity === filterSeverityEnum.GRAVE;
          return filterSeverity === filterSeverityEnum.MODERADO;
        })
      : reports_filtered;

  return (
    <div className={`${style.dashboard}`}>
      <ul>
        <li className={`${style.dash__box__info}`}>
          <Link to="/management">
            <CardInfo
              title={"Total de Ocorrências"}
              value={totalReports(reports)}
              incrementValue={20}
            />
          </Link>
        </li>
        <li className={`${style.dash__box__info}`}>
          <Link to="/ranking">
            <CardInfo
              title={"Bairros Catalogados"}
              value={getBairros(reports).bairros.length}
              incrementValue={20}
            />
          </Link>
        </li>
        <li className={`${style.dash__box__info}`}>
          <Link to="/metrics">
            <CardInfo
              title={"Moradores Atendidos"}
              value={getUsersServed(users)}
              incrementValue={-20}
            />
          </Link>
        </li>
        <li className={`${style.dash__box__info}`}>
          <Link to="/metrics">
            <CardInfo
              title={"Moradores A Serem Atendidos"}
              value={getUsersNotServed(users)}
              incrementValue={-20}
            />
          </Link>
        </li>
      </ul>

      <main className={`${style.dash__mapper}`}>
        <Filter
          filterStatus={filterStatus}
          onFilterStatus={setFilterStatus}
          filterSeverity={filterSeverity}
          onFilterSeverity={setFilterSeverity}
        />

        <div className={`${style.map__bg}`}>
          <div className={`${style.map__container}`}>
            <h1 className="font-s c4">
              Mapa De Ocorrências que não foram resolvidas
            </h1>
            <MapReports reports={filter_Severity_Reports} />
          </div>

          <Ranking rank={getBairros(reports).rank} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
