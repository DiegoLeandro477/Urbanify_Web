import React from "react";
import "./style.css";

const FilterServerity = () => {
  return (
    <ul className="filter__list">
      <li className="font-xs c4 list__item">Todas ocorrências</li>
      <li className="font-xs c4 list__item select">Somente graves</li>
      <li className="font-xs c4 list__item">Somente moderados</li>
    </ul>
  );
};

export default FilterServerity;
