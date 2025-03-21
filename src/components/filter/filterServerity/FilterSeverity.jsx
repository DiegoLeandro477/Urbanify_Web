import React from "react";
import style from "./style.module.css";
import { filterSeverityEnum } from "../../../utils/environment";

const FilterServerity = ({ filter, onFilterChange }) => {
  return (
    <ul className={`${style.filter__list}`}>
      <li
        className={`font-xs c4 ${style.list__item}  ${filter === filterSeverityEnum.ALL && style.select}`}
        onClick={() => onFilterChange(filterSeverityEnum.ALL)}
      >
        Todas ocorrências
      </li>
      <li
        className={`font-xs c4 ${style.list__item} ${filter === filterSeverityEnum.GRAVE && style.select}`}
        onClick={() => onFilterChange(filterSeverityEnum.GRAVE)}
      >
        Somente graves
      </li>
      <li
        className={`font-xs c4 ${style.list__item} ${filter === filterSeverityEnum.MODERADO && style.select}`}
        onClick={() => onFilterChange(filterSeverityEnum.MODERADO)}
      >
        Somente moderados
      </li>
    </ul>
  );
};

export default FilterServerity;
