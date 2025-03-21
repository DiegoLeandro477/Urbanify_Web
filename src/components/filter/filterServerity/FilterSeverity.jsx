import React from "react";
import style from "./style.module.css";
import { filterSeverityEnum } from "../../../utils/environment";

const FilterServerity = ({ filter, onFilter }) => {
  return (
    <ul className={`${style.filter__list}`}>
      <li
        className={`font-xs c4 ${style.list__item}  ${filter === filterSeverityEnum.ALL && style.select}`}
        onClick={() => onFilter(filterSeverityEnum.ALL)}
      >
        Todas ocorrências
      </li>
      <li
        className={`font-xs c4 ${style.list__item} ${filter === filterSeverityEnum.GRAVE && style.select}`}
        onClick={() => onFilter(filterSeverityEnum.GRAVE)}
      >
        Somente graves
      </li>
      <li
        className={`font-xs c4 ${style.list__item} ${filter === filterSeverityEnum.MODERADO && style.select}`}
        onClick={() => onFilter(filterSeverityEnum.MODERADO)}
      >
        Somente moderados
      </li>
    </ul>
  );
};

export default FilterServerity;
