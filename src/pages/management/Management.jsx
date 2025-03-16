import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import Table from "../../components/management/table/Table";
import Card from "../../components/management/card/Card";

function Management() {
  return (
    <>
      <Header
        title="Gestão de reparos"
        text="Gerenciamento e monitoramento de reparos. Acompanhe as ocorrências reportadas pelos cidadãos desde a abertura até a conclusão."
      />

      <main className={`bg-12 m-1-5 ${style.main}`}>
        <Filter />

        <div className={style.content}>
          <Table />

          <Card />
        </div>
      </main>
    </>
  );
}

export default Management;
