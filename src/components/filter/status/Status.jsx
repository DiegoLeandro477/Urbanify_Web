import React from "react";
import style from "./style.module.css";

import { ReportStatusEnum } from "../../../utils/environment";

function Status({ filter, setFilter }) {
  return (
    <div className={`font-m c4 ${style.filter__PR}`}>
      <span
        className={`${filter.status == ReportStatusEnum.PENDING && style.selected}`}
        onClick={() =>
          setFilter({ ...filter, status: ReportStatusEnum.PENDING })
        }
      >
        Pendentes
      </span>
      <span
        className={`${filter.status == ReportStatusEnum.COMPLETED && style.selected}`}
        onClick={() =>
          setFilter({ ...filter, status: ReportStatusEnum.COMPLETED })
        }
      >
        Resolvidos
      </span>
    </div>
  );
}

export default Status;
