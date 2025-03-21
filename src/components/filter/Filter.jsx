import React from "react";
import style from "./style.module.css";
import FilterSeverity from "./filterServerity/FilterSeverity";
import DateRanger from "./dateRanger/DateRanger";
import { ReportStatusEnum } from "../../utils/environment";

const Filter = ({
  filterStatus,
  onFilterStatus,
  filterSeverity,
  onFilterSeverity,
}) => {
  return (
    <div className={`${style.filter}`}>
      <div className={`font-m c4 ${style.filter__PR}`}>
        <span
          className={` ${
            !filterStatus.includes(ReportStatusEnum.CONCLUIDO)
              ? style.selected
              : ""
          }`}
          onClick={() =>
            onFilterStatus([
              ReportStatusEnum.PENDENTE,
              ReportStatusEnum.AVALIADO,
            ])
          }
        >
          Pendentes
        </span>
        <span
          className={` ${
            filterStatus.includes(ReportStatusEnum.CONCLUIDO)
              ? style.selected
              : ""
          }`}
          onClick={() => onFilterStatus([ReportStatusEnum.CONCLUIDO])}
        >
          Resolvidos
        </span>
      </div>

      <FilterSeverity filter={filterSeverity} onFilter={onFilterSeverity} />

      <DateRanger />
    </div>
  );
};

export default Filter;
