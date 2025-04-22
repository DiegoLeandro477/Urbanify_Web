import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Control from "../../components/pages/ranking/control/Control";
import Table from "../../components/pages/ranking/table/Table";

function Metrics() {
  const [filter, setFilter] = React.useState({
    date: {
      start: null,
      end: null,
    },
    districtTarget: "",
  });

  return (
    <>
      <Header
        title="Ranking"
        text="Visualize os bairros com o mais ocorrências. Identifique rapidamente as áreas que mais necessitam de atenção."
      />

      <main className={`m-1-5 container ${style.main}`}>
        <Control filter={filter} setFilter={setFilter} />

        <Table />
      </main>
    </>
  );
}

export default Metrics;
