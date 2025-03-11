import React from "react";
import Header from "../components/header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdDisplaySettings } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import "./styles.css";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="container-bg">
        <div className="container layout">
          <nav className="nav">
            <ul>
              <NavLink className="nav-link" to={"/Dashboard"}>
                <li>
                  <AiOutlineDashboard className="link-icon" size={14} />
                  <span className="font-xs">Dashboard</span>
                </li>
              </NavLink>

              <NavLink className="nav-link" to={"/GestaoReparos"}>
                <li>
                  <MdDisplaySettings className="link-icon" size={14} />
                  <span className="font-xs">Gestão De Reparos</span>
                </li>
              </NavLink>

              <NavLink className="nav-link" to={"/AnalitycLogs"}>
                <li>
                  <SiGoogleanalytics className="link-icon" size={14} />
                  <span className="font-xs">Análises De Ocorrência</span>
                </li>
              </NavLink>

              <NavLink className="nav-link" to={"/Ranking"}>
                <li>
                  <FaRankingStar className="link-icon" size={14} />
                  <span className="font-xs">Ranking</span>
                </li>
              </NavLink>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
