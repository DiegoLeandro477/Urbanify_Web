import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Table from "../../components/pages/ranking/table/Table";

function Metrics() {
  return (
    <>
      <Header
        title="Ranking"
        text="Visualize os bairros com o mais ocorrências. Identifique rapidamente as áreas que mais necessitam de atenção."
      />

      <main className={`m-1-5 container ${style.main}`}>
        <Table />
      </main>
    </>
  );
}

export default Metrics;
