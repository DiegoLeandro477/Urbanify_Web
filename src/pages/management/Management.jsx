import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import Table from "../../components/pages/management/table/Table";
import { filterSeverityEnum, ReportStatusEnum } from "../../utils/environment";
import useReports from "../../hooks/useReports";
import useResolvedReports from "../../hooks/useResolvedReports";
import { useParams } from "react-router-dom";
import Card from "../../components/pages/management/card/Card";
import { getUrlsReport } from "../../services/getUrlsReport";
import { filterReports } from "../../services/dashboard";

function Management() {
  const { reports } = useReports();
  const { resolvedReports } = useResolvedReports();

  const [filter, setFilter] = React.useState({
    status: ReportStatusEnum.PENDING,
    severity: null,
    date: {
      start: null,
      end: null,
    },
  });
  const [filteredReports, setFilteredReports] = React.useState([]);

  React.useEffect(() => {
    const result = filterReports({ reports, resolvedReports, filter });

    setFilteredReports(result);
  }, [filter, reports]);
  const [urls, setUrls] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const { rep } = useParams(); // Pega o parâmetro da URL

  useEffect(() => {
    if (rep) {
      changeSeletectDistrict(JSON.parse(rep));
    }
  }, [rep]);

  const changeSeletectDistrict = async (rep) => {
    const data = await getUrlsReport(rep);
    setUrls(data);
    if (rep) setModalOpen(true);
  };

  return (
    <>
      <Header
        title="Gestão de reparos"
        text="Gerenciamento e monitoramento de reparos. Acompanhe as ocorrências reportadas pelos cidadãos desde a abertura até a conclusão."
      />

      <main className={`bg-12 m-1-5 ${style.main}`}>
        <Filter filter={filter} setFilter={setFilter} />

        <div className={style.content}>
          <Table
            reports={filteredReports}
            onSelected={changeSeletectDistrict}
            setUrls={setUrls}
          />
        </div>

        {modalOpen && (
          <Card
            urls={urls}
            close={setModalOpen}
            on={() => alert("reparando...")}
          />
        )}
      </main>
    </>
  );
}

export default Management;
