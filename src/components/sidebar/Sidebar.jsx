import React from "react";
import "./style.css";

import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineControl } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { GoTrophy } from "react-icons/go";

const Header = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink className="nav-link" to={"/Dashboard"}>
          <li className="nav__item active">
            <AiOutlineDashboard className="item__icon p1" size={14} />
            <span className="font-xs nav__text p1">Dashboard</span>
          </li>
        </NavLink>

        <NavLink className="nav-link" to={"/GestaoReparos"}>
          <li className="nav__item">
            <AiOutlineControl className="c2 item__icon" size={14} />
            <span className="font-xs c2 nav__text">Gestão De Reparos</span>
          </li>
        </NavLink>

        <NavLink className="nav-link" to={"/AnalitycLogs"}>
          <li className="nav__item">
            <VscGraph className="c2 item__icon" size={14} />
            <span className="font-xs c2 nav__text">Análises De Ocorrência</span>
          </li>
        </NavLink>

        <NavLink className="nav-link" to={"/Ranking"}>
          <li className="nav__item">
            <GoTrophy className="c2 item__icon" size={14} />
            <span className="font-xs c2 nav__text">Ranking</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
