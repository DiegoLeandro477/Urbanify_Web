import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";

function Management() {
  return (
    <>
      <Header
        title="Gestão de reparos"
        text="Gerenciamento e monitoramento de reparos. Acompanhe as ocorrências reportadas pelos cidadãos desde a abertura até a conclusão."
      />

      <main className={`m-1-5`}>
        <Filter />
      </main>
    </>
  );
}

export default Management;
