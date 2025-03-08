import React, { useState } from "react";
import MapReports from "../../components/mapReports/MapReports";
import "./styles.css";

const ReportStatus = Object.freeze({
  PENDENTE: 0,
  RESOLVIDO: 1
});

const Dashboard = () => {
  const [selectPR, setSelectPR] = useState(ReportStatus.PENDENTE);

  return (
    <div className="dashboard">
      <ul>
        <li className="dash-box-info">
          <span className="font-1-s c4">Total de ocorrência</span>
          <span className="font-1-xl c2 value">43.891</span>
          <span className="font-1-xs c4">Acrêscimo de 20%</span>
        </li>
        <li className="dash-box-info">
          <span className="font-1-s c4">Bairros catalogados</span>
          <span className="font-1-xl c2 value">94</span>
          <span className="font-1-xs c4">Acrêscimo de 20%</span>
        </li>
        <li className="dash-box-info">
          <span className="font-1-s c4">Usuários atendidos</span>
          <span className="font-1-xl c2 value">193.391</span>
          <span className="font-1-xs c4">Sem variação</span>
        </li>
        <li className="dash-box-info">
          <span className="font-1-s c4">Usuários não atendidos</span>
          <span className="font-1-xl c2 value">148.293</span>
          <span className="font-1-xs c4">Reddução de 25%</span>
        </li>
      </ul>

      <main className="dash-mapper">
        <div className="dash-filter">
          <div className="filter-PR">
            <span className="font_1_m">Pendentes</span>
            <span className="font_1_m">Resolvidos</span>
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
        <MapReports />
      </main>
    </div>
  );
};

export default Dashboard;
