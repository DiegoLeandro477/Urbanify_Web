import React, { useState } from "react";
import style from "./style.module.css";

import dataRanking from "../../../../../dataRanking.js";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const TabelaOrdenavel = () => {
  const [dados, setDados] = useState(dataRanking);
  const [ordem, setOrdem] = useState({ coluna: null, direcao: "asc" });
  const [paginaAtual, setPaginaAtual] = useState(1);

  const itensPorPagina = 10;
  const totalPaginas = Math.ceil(dados.length / itensPorPagina);

  const ordenarDados = (coluna) => {
    setPaginaAtual(1);

    const novaDirecao =
      ordem.coluna === coluna && ordem.direcao === "asc" ? "desc" : "asc";

    const dadosOrdenados = [...dados].sort((a, b) => {
      if (a[coluna] < b[coluna]) return novaDirecao === "asc" ? -1 : 1;
      if (a[coluna] > b[coluna]) return novaDirecao === "asc" ? 1 : -1;
      return 0;
    });
    setDados(dadosOrdenados);
    setOrdem({ coluna, direcao: novaDirecao });
  };

  const getIconeOrdenacao = (coluna) => {
    if (ordem.coluna === coluna) {
      return ordem.direcao === "asc" ? "▲" : "▼"; // Setas Unicode
    }
    return "⇅"; // Ícone neutro
  };

  const mudarPagina = (novaPagina) => {
    if (novaPagina > 0 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  // Função para gerar os botões de paginação
  const gerarBotoesPaginacao = () => {
    const botoes = [];
    const totalPaginas = Math.ceil(dados.length / itensPorPagina);
    const range = 1; // Quantidade de páginas visíveis ao redor da página atual

    // Botão para página anterior
    botoes.push(
      <GrFormPrevious
        key="prev"
        className={`font-m ${style.prev} ${paginaAtual === 1 ? style.disabled : ""}`}
        onClick={() => mudarPagina(paginaAtual - 1)}
      />
    );

    // Lógica para gerar as páginas
    for (let i = 1; i <= totalPaginas; i++) {
      if (
        i === 1 || // Sempre mostra a primeira página
        i === totalPaginas || // Sempre mostra a última página
        i === paginaAtual || // Sempre mostra a página atual
        i === paginaAtual - range ||
        i === paginaAtual + range // Mostra as páginas próximas à atual
      ) {
        botoes.push(
          <button
            key={i}
            onClick={() => mudarPagina(i)}
            className={`font-s ${style.box} ${paginaAtual === i ? style.select : ""}`}
          >
            {i}
          </button>
        );
      } else if (
        (i === 2 && paginaAtual > range + 2) ||
        (i === totalPaginas - 1 && paginaAtual < totalPaginas - range - 1)
      ) {
        botoes.push(
          <span key={`ellipsis-${i}`} className={`font-m ${style.ellipsis}`}>
            ...
          </span>
        );
      }
    }

    // Botão para próxima página
    botoes.push(
      <GrFormNext
        key="next"
        className={`font-m ${style.next} ${
          paginaAtual === totalPaginas ? style.disabled : ""
        }`}
        onClick={() => mudarPagina(paginaAtual + 1)}
      />
    );

    return botoes;
  };

  // Dados paginados
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const dadosPaginados = dados.slice(indiceInicio, indiceFim);

  return (
    <div>
      <table className={`${style.table}`}>
        <thead className={style.table__header}>
          <tr className={`font-s c2 ${style.header__list}`}>
            <th onClick={() => ordenarDados("districts")}>
              <span>Bairro</span> <div>{getIconeOrdenacao("districts")}</div>
            </th>
            <th onClick={() => ordenarDados("usersAttendeds")}>
              <div>Moradores atendidos</div>
              <div>{getIconeOrdenacao("usersAttendeds")}</div>
            </th>

            <th onClick={() => ordenarDados("usersNotAttendeds")}>
              <span>Moradores não atendidos</span>
              <div>{getIconeOrdenacao("usersNotAttendeds")}</div>
            </th>
            <th onClick={() => ordenarDados("reports")}>
              <span>N° relatos</span> <div>{getIconeOrdenacao("reports")}</div>
            </th>
            <th onClick={() => ordenarDados("severeReports")}>
              <span>N° de relatos graves</span>
              <div>{getIconeOrdenacao("severeReports")}</div>
            </th>
            <th onClick={() => ordenarDados("moderateReports")}>
              <span>N° de relatos moderados</span>
              <div>{getIconeOrdenacao("moderateReports")}</div>
            </th>
            <th onClick={() => ordenarDados("repairs")}>
              <span>Reparos realizados</span>
              <div>{getIconeOrdenacao("repairs")}</div>
            </th>
            <th onClick={() => ordenarDados("notRepaireds")}>
              <span>Reparos pendentes</span>
              <div>{getIconeOrdenacao("notRepaireds")}</div>
            </th>
          </tr>
        </thead>
        <tbody className={style.table__body}>
          {dadosPaginados.map((item) => (
            <tr className={`font-xs c4 ${style.body__list}`} key={item.id}>
              <td>{item.districts}</td>
              <td>{item.usersAttendeds}</td>
              <td>{item.usersNotAttendeds}</td>
              <td>{item.reports}</td>
              <td>{item.severeReports}</td>
              <td>{item.moderateReports}</td>
              <td>{item.repairs}</td>
              <td>{item.notRepaireds}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={style.pagination}>{gerarBotoesPaginacao()}</div>
    </div>
  );
};

export default TabelaOrdenavel;
