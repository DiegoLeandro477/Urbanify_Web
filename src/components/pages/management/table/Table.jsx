import React from "react";
import style from "./style.module.css";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import {
  getReportStatusName,
  ReportStatusEnum,
} from "../../../../utils/environment";

const Table = ({ reports }) => {
  return (
    <div>
      <table className={`${style.table}`}>
        <thead className={style.table__header}>
          <tr className={style.header__list}>
            <th className={`font-s c2`}>Bairro</th>
            <th className={`font-s c2`}>Rua</th>
            <th className={`font-s c2`}>Status</th>
            <th className={`font-s c2`}>Ocorrência</th>
            <th className={`font-s c2`}>Data</th>
          </tr>
        </thead>
        <tbody className={style.table__body}>
          {reports.map((report, index) => (
            <tr className={style.body__list} key={index}>
              <td className={`font-s c4`}>{report.district}</td>
              <td className={`font-s c4`}>{report.street}</td>
              <td className={`font-s c4`}>
                {getReportStatusName(report.status)}
              </td>
              <td className={`font-s c4`}>
                {reports.filter((r) => r.district === report.district).length}
              </td>
              {console.log(report)}
              <td className={`font-s c4`}>17/03/2025</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.pagination}>
        <GrFormPrevious className={`${style.box} ${style.prev}`} />

        <button className={`font-s ${style.select} ${style.box}  `}>1</button>
        <button className={`font-s ${style.box}  `}>2</button>
        <button className={`font-s ${style.box}  `}>3</button>
        <button className={`font-s ${style.box}  `}>4</button>
        <button className={`font-s ${style.box}  `}>5</button>

        <GrFormNext className={`${style.box} ${style.next}`} />
      </div>
    </div>
  );
};

export default Table;
