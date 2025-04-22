import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Control from "../../components/pages/ranking/control/Control";
import Table from "../../components/pages/ranking/table/Table";

import useReports from "../../hooks/useReports";
import useResolvedReports from "../../hooks/useResolvedReports.js";
import { filterReports } from "../../services/ranking.js";

function Metrics() {
  const { reports } = useReports();
  const { resolvedReports } = useResolvedReports();
  const [reportsFiltered, setReportsFiltered] = React.useState([]);
  const [resolvedFiltered, setResolvedFiltered] = React.useState([]);
  const [filter, setFilter] = React.useState({
    date: {
      start: null,
      end: null,
    },
    districtTarget: "",
  });

  React.useEffect(() => {
    const resultReports = filterReports({ data: reports, filter });
    const resultResolveds = filterReports({ data: resolvedReports, filter });

    setReportsFiltered(resultReports);
    setResolvedFiltered(resultResolveds);
  }, [reports, resolvedReports, filter]);

  return (
    <>
      <Header
        title="Ranking"
        text="Visualize os bairros com o mais ocorrências. Identifique rapidamente as áreas que mais necessitam de atenção."
      />

      <main className={`m-1-5 container ${style.main}`}>
        <Control filter={filter} setFilter={setFilter} />

        <Table reports={reportsFiltered} resolvedReports={resolvedFiltered} />
      </main>
    </>
  );
}

export default Metrics;
