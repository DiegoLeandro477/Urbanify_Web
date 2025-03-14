import React from "react";
import style from "./style.module.css";

const FilterServerity = () => {
  return (
    <ul className={`${style.filter__list}`}>
      <li className={`font-xs c4 ${style.list__item}`}>Todas ocorrências</li>
      <li className={`font-xs c4 ${style.list__item} ${style.select}`}>
        Somente graves
      </li>
      <li className={`font-xs c4 ${style.list__item}`}>Somente moderados</li>
    </ul>
  );
};

export default FilterServerity;
