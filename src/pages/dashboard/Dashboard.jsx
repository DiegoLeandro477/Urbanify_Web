import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { MdDisplaySettings } from "react-icons/md";
import "./styles.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ul>
        <li>
          <div className="dash-box-info">
            <span className="font-1-s c4">Total de ocorrência</span>
            <span className="font-1-xl c2 value">43.891</span>
            <span className="font-1-xs c4">Acrêscimo de 20%</span>
          </div>
        </li>
        <li>
          <div className="dash-box-info">
            <span className="font-1-s c4">Bairros catalogados</span>
            <span className="font-1-xl c2 value">94</span>
            <span className="font-1-xs c4">Acrêscimo de 20%</span>
          </div>
        </li>
        <li>
          <div className="dash-box-info">
            <span className="font-1-s c4">Usuários atendidos</span>
            <span className="font-1-xl c2 value">193.391</span>
            <span className="font-1-xs c4">Sem variação</span>
          </div>
        </li>
        <li>
          <div className="dash-box-info">
            <span className="font-1-s c4">Usuários não atendidos</span>
            <span className="font-1-xl c2 value">148.293</span>
            <span className="font-1-xs c4">Reddução de 25%</span>
          </div>
        </li>
      </ul>

      <main className="dash-mapper">
        <div className="dash-filter">
          <div className="filter-PR">
            <span>Pendentes</span>
            <span>Resolvidos</span>
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
      </main>
    </div>
  );
};

export default Dashboard;
