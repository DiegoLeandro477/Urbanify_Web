import React from "react";
import style from "./style.module.css";
import { FilterTypeEnum } from "../../../utils/environment";
import ChartReportsYear from "../chartReportsYear/ChartReportsYear";

// className={``}
// ${style.}

const Card = ({ data: { title, subtitle, type, chartType, filterType } }) => {
  return (
    <div className={`container ${style.card}`}>
      <div className={`${style.card__header}`}>
        <div>
          <h2 className={`font-m c2 mb-0-5`}>{title}</h2>
          <p className={`font-s c4`}>{subtitle}</p>
        </div>

        {filterType == FilterTypeEnum.YEAR ? (
          <select className={`font-xs c4 form__select`} name="year" id="year">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        ) : (
          <select name="month" id="month">
            <option value="jan">Janeiro</option>
            <option value="fev">Fevereiro</option>
            <option value="mar">Março</option>
          </select>
        )}
      </div>

      <ChartReportsYear />
    </div>
  );
};

export default Card;
