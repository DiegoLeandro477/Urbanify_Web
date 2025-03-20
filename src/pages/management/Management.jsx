import React, { useState } from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import Table from "../../components/pages/management/table/Table";
import Card from "../../components/pages/management/card/Card";
import { ReportStatusEnum } from "../../utils/environment";
import useReports from "../../hooks/useReports";

function Management() {
  const { reports } = useReports();
  const [statusFilter, setStatusFilter] = useState([ReportStatusEnum.PENDENTE]);
  // testando se as novas configs funcionaram
  const handleFilter = () => {
    const handleFilterChange = (status) => {
      status === ReportStatusEnum.PENDENTE
        ? setStatusFilter([
            ReportStatusEnum.PENDENTE,
            ReportStatusEnum.AVALIADO,
          ])
        : setStatusFilter([ReportStatusEnum.CONCLUIDO]); // Apenas CONCLUIDO
    };
  };

  // Filtra os reports com base no filtro
  let filteredReports = statusFilter
    ? reports.filter((report) => statusFilter.includes(report.status))
    : reports;

  return (
    <>
      <Header
        title="Gestão de reparos"
        text="Gerenciamento e monitoramento de reparos. Acompanhe as ocorrências reportadas pelos cidadãos desde a abertura até a conclusão."
      />

      <main className={`bg-12 m-1-5 ${style.main}`}>
        <Filter filter={statusFilter} onFilterChange={handleFilter} />

        <div className={style.content}>
          <Table reports={reports} />

          <Card />
        </div>
      </main>
    </>
  );
}

export default Management;
