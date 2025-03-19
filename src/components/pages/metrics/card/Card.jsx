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
  return (
    <div className={`container ${style.card}`}>
      <div className={`mb-2 ${style.card__header}`}>
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
          <select className={`font-xs c4 form__select`} name="month" id="month">
            <option value="jan">Janeiro</option>
            <option value="fev">Fevereiro</option>
            <option value="mar">Março</option>
          </select>
        )}
      </div>

      {ChartCardEnum.REPORTS__YEAR == type && <ChartReportsXYear />}
      {ChartCardEnum.REPORTS__MONTH == type && <ChartReportsXMonth />}

      {ChartCardEnum.ATTENDED__NOT_ATTENDED == type && (
        <ChartAttendedXNotAttended />
      )}
      {ChartCardEnum.FIX__FIXED == type && <ChartFixXFixed />}
      {ChartCardEnum.SEVERE__MODERATE == type && <ChartSevereXModerate />}

      {ChartCardEnum.ATTENDEDS__MONTH == type && <ChartAttendedsXMonth />}

      {ChartCardEnum.USERS__YEAR == type && <ChartUsersXMonth />}
    </div>
  );
};

export default Card;
