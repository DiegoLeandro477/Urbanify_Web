import React from "react";
import style from "./style.module.css";
import FilterSeverity from "./filterServerity/FilterSeverity";
import DateRanger from "./dateRanger/DateRanger";
import { ReportStatusEnum } from "../../utils/environment";

const Filter = () => {
  const [filter, setFilter] = React.useState([ReportStatusEnum.PENDENTE]);

  const handleFilterChange = (status) => {
    console.log("Mudando para: ", status);
    status === ReportStatusEnum.PENDENTE
      ? setFilter([ReportStatusEnum.PENDENTE, ReportStatusEnum.AVALIADO])
      : setFilter([ReportStatusEnum.CONCLUIDO]); // Apenas CONCLUIDO
  };

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
          onClick={() => handleFilterChange(ReportStatusEnum.PENDENTE)}
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
          onClick={() => handleFilterChange(ReportStatusEnum.CONCLUIDO)}
        >
          Resolvidos
        </span>
      </div>

      <FilterSeverity />

      <DateRanger />
    </div>
  );
};

export default Filter;
