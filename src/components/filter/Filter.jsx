import React from "react";
import style from "./style.module.css";
import FilterSeverity from "./filterServerity/FilterSeverity";
import DateRanger from "./dateRanger/DateRanger";
import { ReportStatus } from "../../utils/StatusEnum";

const Filter = () => {
  const [filter, setFilter] = React.useState([ReportStatus.PENDENTE]);

  const handleFilterChange = (status) => {
    console.log("Mudando para: ", status);
    status === ReportStatus.PENDENTE
      ? setFilter([ReportStatus.PENDENTE, ReportStatus.AVALIADO])
      : setFilter([ReportStatus.CONCLUIDO]); // Apenas CONCLUIDO
  };

  return (
    <div className={`${style.filter}`}>
      <div className={`font-m c4 ${style.filter__PR}`}>
        <span
          className={` ${
            [ReportStatus.PENDENTE, ReportStatus.AVALIADO].some((status) =>
              filter.includes(status)
            )
              ? style.selected
              : ""
          }`}
          onClick={() => handleFilterChange(ReportStatus.PENDENTE)}
        >
          Pendentes
        </span>
        <span
          className={` ${
            [ReportStatus.CONCLUIDO].some((status) => filter.includes(status))
              ? style.selected
              : ""
          }`}
          onClick={() => handleFilterChange(ReportStatus.CONCLUIDO)}
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
