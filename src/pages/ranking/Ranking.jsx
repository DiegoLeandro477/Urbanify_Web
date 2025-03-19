import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Card from "../../components/pages/metrics/card/Card";
import { ChartEnum } from "../../utils/environment";

function Metrics() {
  return (
    <>
      <Header
        title="Ranking"
        text="Visualize os bairros com o mais ocorrências. Identifique rapidamente as áreas que mais necessitam de atenção."
      />

      <main className={`m-1-5 ${style.main}`}></main>
    </>
  );
}

export default Metrics;
