import React from "react";
import style from "./style.module.css";

import CardInfo from "../../components/dashboard/cardInfo/CardInfo";
import MapReports from "../../components/dashboard/mapReports/MapReports";
import Filter from "../../components/filter/Filter";

import Ranking from "../../components/dashboard/ranking/Ranking";

import useReports from "../../hooks/useReports";
import { quantBairros, totalOcorrencias } from "../../services/statistics";

const Dashboard = () => {
  const { reports } = useReports();

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
            value={quantBairros(reports)}
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
        <Filter />

        <div className={`${style.map__bg}`}>
          <div className={`${style.map__container}`}>
            <h1 className="font-s c4">
              Mapa De Ocorrências que não foram resolvidas
            </h1>
            <MapReports reports={reports} filter={"filter"} />
          </div>

          <Ranking />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
