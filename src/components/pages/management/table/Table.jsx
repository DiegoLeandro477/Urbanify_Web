import React, { useState } from "react";
import style from "./style.module.css";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { getReportStatusName } from "../../../../utils/environment";

const Table = ({ reports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 7;

  // Cálculo do total de páginas
  const totalPages = Math.ceil(reports.length / reportsPerPage);

  // Obtendo os reports da página atual
  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = reports.slice(startIndex, startIndex + reportsPerPage);

  // Funções de navegação
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  const getPages = () => {
    const maxPagesToShow = 6; // Definir o número máximo de páginas visíveis
    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    const left = Math.max(2, currentPage - 2);
    const right = Math.min(totalPages - 1, currentPage + 2);

    pages.push(1); // Sempre inclui a primeira página

    if (left > 2) pages.push("left-ellipsis"); // Usa uma chave única

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push("right-ellipsis"); // Usa uma chave única

    pages.push(totalPages); // Sempre inclui a última página
    return pages;
  };

  return (
    <div>
      <table className={`${style.table}`}>
        <thead className={style.table__header}>
          <tr className={style.header__list}>
            <th className={`font-s c2`}>Bairro</th>
            <th className={`font-s c2`}>Rua</th>
            <th className={`font-s c2`}>Status</th>
            <th className={`font-s c2`}>Ocorrência</th>
            <th className={`font-s c2`}>Data</th>
          </tr>
        </thead>
        <tbody className={style.table__body}>
          {currentReports.map((report, index) => (
            <tr className={style.body__list} key={index}>
              <td className={`font-s c4`}>{report.district}</td>
              <td className={`font-s c4`}>{report.street}</td>
              <td className={`font-s c4`}>
                {getReportStatusName(report.status)}
              </td>
              <td className={`font-s c4`}>{report.childrens.length}</td>
              {console.log(report)}
              <td className={`font-s c4`}>{formatDate(report.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINAÇÃO DINÂMICA */}
      <div className={style.pagination}>
        {/* Botão de página anterior */}
        <GrFormPrevious
          className={`${style.box} ${style.prev} ${currentPage === 1 ? style.disabled : ""}`}
          onClick={handlePrevPage}
        />

        {/* Botões numéricos dinâmicos */}
        {getPages().map((page, index) =>
          typeof page === "string" ? (
            <span
              key={page}
              className={`font-s ${style.box} ${style.disabled}`}
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`font-s ${style.box} ${page === currentPage ? style.select : ""}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          )
        )}

        {/* Botão de próxima página */}
        <GrFormNext
          className={`${style.box} ${style.next} ${currentPage === totalPages ? style.disabled : ""}`}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Table;
