import React from "react";
import style from "./style.module.css";
import FilterSeverity from "./filterServerity/FilterSeverity";
import DateRanger from "./dateRanger/DateRanger";
import { filterSeverityEnum, ReportStatusEnum } from "../../utils/environment";

const Filter = ({
  filter,
  onFilterChange,
  filterSeverity,
  onFilterSeverity,
}) => {
  return (
    <div className={`${style.filter}`}>
      <div className={`font-m c4 ${style.filter__PR}`}>
        <span
          className={` ${
            [ReportStatusEnum.PENDENTE, ReportStatusEnum.AVALIADO].some(
              (status) => filter.includes(status)
            )
              ? style.selected
              : ""
          }`}
          onClick={() =>
            onFilterChange([
              ReportStatusEnum.PENDENTE,
              ReportStatusEnum.AVALIADO,
            ])
          }
        >
          Pendentes
        </span>
        <span
          className={` ${
            [ReportStatusEnum.CONCLUIDO].some((status) =>
              filter.includes(status)
            )
              ? style.selected
              : ""
          }`}
          onClick={() => onFilterChange([ReportStatusEnum.CONCLUIDO])}
        >
          Resolvidos
        </span>
      </div>

      <FilterSeverity
        filter={filterSeverity}
        onFilterChange={onFilterSeverity}
      />

      <DateRanger />
    </div>
  );
};

export default Filter;
