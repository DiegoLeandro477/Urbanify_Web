import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Card from "../../components/metrics/card/Card";
import { ChartEnum } from "../../utils/environment";

function Metrics() {
  return (
    <>
      <Header
        title="Análises De Ocorrência"
        text="Acompanhe o desempenho da cidade através de gráficos. A ação tomada com base em dados potencializa a eficiência da gestão."
      />

      <main className={`m-1-5 ${style.main}`}>
        <Card data={ChartEnum.REPORTS_YEAR} />

        <Card data={ChartEnum.REPORTS_YEAR} />
      </main>
    </>
  );
}

export default Metrics;
