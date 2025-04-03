import React from "react";
import style from "./style.module.css";
import { FilterTypeEnum, ChartCardEnum } from "../../../../utils/environment";

import ChartReportsXYear from "../reportsXyear/ChartReportsXYear";
import ChartReportsXMonth from "../reportsXmonth/ChartReportsXMonth";

import ChartAttendedXNotAttended from "../attendedXnotAttended/ChartAttendedXNotAttended";
import ChartFixXFixed from "../fixXfixed/ChartFixXFixed";
import ChartSevereXModerate from "../severeXmoderate/ChartSevereXModerate";

import ChartAttendedsXMonth from "../attendedsXmonth/ChartAttendedsXMonth";
import ChartUsersXMonth from "../usersXYear/ChartUsersXMonth";

// className={``}
// ${style.}

const Card = ({ data: { title, subtitle, type, filterType } }) => {
  const [monthTarget, setMonthTarget] = React.useState(0); // Estado para armazenar o mês selecionado

  const handleMonthTarget = (event) => {
    setMonthTarget(Number(event.target.value)); // Atualiza o estado com o índice do mês selecionado
  };

  return (
    <div className={`container ${style.card}`}>
      <div className={`mb-2 ${style.card__header}`}>
        <div>
          <h2 className={`font-m c2 mb-0-5`}>{title}</h2>
          <p className={`font-s c4`}>{subtitle}</p>
        </div>

        {filterType === FilterTypeEnum.YEAR ? (
          <select className={`font-xs c4 form__select`} name="year" id="year">
            <option value="2025">2025</option>
          </select>
        ) : filterType === FilterTypeEnum.MONTH ? (
          <select
            className={`font-xs c4 form__select`}
            name="month"
            id="month"
            onChange={handleMonthTarget} // Chamado quando o mês é alterado
          >
            <option value="0">Janeiro</option>
            <option value="1">Fevereiro</option>
            <option value="2">Março</option>
            <option value="3">Abril</option>
            <option value="4">Maio</option>
            <option value="5">Junho</option>
            <option value="6">Julho</option>
            <option value="7">Agosto</option>
            <option value="8">Setembro</option>
            <option value="9">Outubro</option>
            <option value="10">Novembro</option>
            <option value="11">Dezembro</option>
          </select>
        ) : null}
      </div>

      {ChartCardEnum.REPORTS__YEAR == type && <ChartReportsXYear />}

      {ChartCardEnum.REPORTS__MONTH == type && (
        <ChartReportsXMonth monthTarget={monthTarget} />
      )}

      {ChartCardEnum.ATTENDED__NOT_ATTENDED == type && (
        <ChartAttendedXNotAttended />
      )}

      {ChartCardEnum.FIX__FIXED == type && (
        <ChartFixXFixed monthTarget={monthTarget} />
      )}

      {ChartCardEnum.SEVERE__MODERATE == type && (
        <ChartSevereXModerate monthTarget={monthTarget} />
      )}

      {ChartCardEnum.ATTENDEDS__MONTH == type && <ChartAttendedsXMonth />}

      {ChartCardEnum.USERS__YEAR == type && <ChartUsersXMonth />}
    </div>
  );
};

export default Card;
