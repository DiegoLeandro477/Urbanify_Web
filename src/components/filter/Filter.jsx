import React from "react";
import style from "./style.module.css";
import Status from "./status/Status";
import FilterSeverity from "./severity/Severity";
import DateRanger from "./dateRanger/DateRanger";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={`${style.filter}`}>
      <Status filter={filter} setFilter={setFilter} />

      <FilterSeverity filter={filter} setFilter={setFilter} />

      <DateRanger filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Filter;
