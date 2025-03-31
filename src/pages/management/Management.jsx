import React, { useState } from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import Table from "../../components/pages/management/table/Table";
import { filterSeverityEnum, ReportStatusEnum } from "../../utils/environment";
import useReports from "../../hooks/useReports";

function Management() {
  const [urls, setUrls] = React.useState([]);
  const { reports, setReports } = useReports();
  const [filterStatus, setFilterStatus] = useState([ReportStatusEnum.PENDENTE]);
  const [filterSeverity, setFilterSeverity] = useState(filterSeverityEnum.ALL);

  const reports_filtered = filterStatus
    ? reports.filter((report) => filterStatus.includes(report.status))
    : reports;

  const filter_Severity_Reports =
    filterSeverity != filterSeverityEnum.ALL
      ? reports_filtered.filter((report) => {
          let cont_severity = [0, 0];
          report.childrens.forEach((element) => {
            cont_severity[element.severity] += 1;
          });
          if (cont_severity[0] >= cont_severity[1])
            return filterSeverity === filterSeverityEnum.GRAVE;
          return filterSeverity === filterSeverityEnum.MODERADO;
        })
      : reports_filtered;
  return (
    <>
      <Header
        title="Gestão de reparos"
        text="Gerenciamento e monitoramento de reparos. Acompanhe as ocorrências reportadas pelos cidadãos desde a abertura até a conclusão."
      />

      <main className={`bg-12 m-1-5 ${style.main}`}>
        <Filter
          filterStatus={filterStatus}
          onFilterStatus={setFilterStatus}
          filterSeverity={filterSeverity}
          onFilterSeverity={setFilterSeverity}
        />

        <div className={style.content}>
          <Table
            reports={filter_Severity_Reports}
            setReports={setReports}
            urls={urls}
            setUrls={setUrls}
          />
        </div>
      </main>
    </>
  );
}

export default Management;
