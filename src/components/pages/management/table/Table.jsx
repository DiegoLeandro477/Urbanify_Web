import React, { useState, useEffect, useCallback } from "react";
import style from "./style.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { getReportStatusName } from "../../../../utils/environment";
import { GET } from "../../../../services/requestHTTP";

// Componente de Tabela Principal
const Table = ({ reports, urls, setUrls }) => {
  const [reportKey, setReportKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 7;

  const totalPages = Math.ceil(reports.length / reportsPerPage);
  const currentReports = reports.slice(
    (currentPage - 1) * reportsPerPage,
    currentPage * reportsPerPage
  );

  // Formatação de data
  const formatDate = (isoString) => {
    // Garante que mês e dia tenham dois dígitos
    const correctedIsoString = isoString.replace(
      /^(\d{4})-(\d{1,2})-(\d{1,2})/,
      (_, year, month, day) =>
        `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    );

    const date = new Date(correctedIsoString);
    return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  // Exemplo de uso:
  console.log(formatDate("2025-3-14T19:41:09.622Z")); // Saída: 14/03/2025

  // Função para buscar dados de um relatório com tratamento de erro
  const fetchReportData = useCallback(
    async (address, geohash) => {
      try {
        const res = await GET(`/report/address/${address}/geohash/${geohash}`);
        setUrls(res.data.data.urls);
      } catch (error) {
        console.error("Erro ao buscar os dados do relatório:", error);
      }
    },
    [setUrls]
  );

  // Lógica para selecionar um relatório
  const handleReportClick = useCallback(
    (index, address, geohash) => {
      setReportKey(index);
      fetchReportData(address, geohash);
    },
    [fetchReportData]
  );

  // Carregamento automático do primeiro relatório ao montar a tabela
  useEffect(() => {
    if (urls.length === 0 && currentReports.length > 0) {
      handleReportClick(
        0,
        currentReports[0].address,
        currentReports[0].geohash
      );
    }
  }, [currentReports, urls, handleReportClick]);

  // Lógica de mudança de página
  const changePage = (newPage) => {
    setCurrentPage(newPage);
    const firstReport = reports[(newPage - 1) * reportsPerPage];
    if (firstReport) {
      handleReportClick(0, firstReport.address, firstReport.geohash);
    }
  };

  // Geração dinâmica de páginas
  const getPages = () => {
    const maxPagesToShow = 6;
    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [1];
    const left = Math.max(2, currentPage - 2);
    const right = Math.min(totalPages - 1, currentPage + 2);

    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  // Renderização
  return (
    <div>
      <table className={style.table}>
        <thead className={style.table__header}>
          <tr className={style.header__list}>
            {["Bairro", "Rua", "Status", "Ocorrência", "Data"].map((header) => (
              <th key={header} className="font-s c2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.table__body}>
          {currentReports.map((report, index) => (
            <tr
              key={index}
              className={`${style.body__list} ${
                reportKey === index ? style.body__list_select : ""
              }`}
              onClick={() =>
                handleReportClick(index, report.address, report.geohash)
              }
            >
              <td className="font-s c4">{report.district}</td>
              <td className="font-s c4">{report.street}</td>
              <td className="font-s c4">
                {getReportStatusName(report.status)}
              </td>
              <td className="font-s c4">{report.childrens.length}</td>
              <td className="font-s c4">{formatDate(report.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={changePage}
        getPages={getPages}
      />
    </div>
  );
};

// Componente de Paginação Separado
const Pagination = ({ currentPage, totalPages, onPageChange, getPages }) => (
  <div className={style.pagination}>
    <GrFormPrevious
      className={`${style.box} ${style.prev} ${
        currentPage === 1 ? style.disabled : ""
      }`}
      onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
    />
    {getPages().map((page, index) =>
      page === "..." ? (
        <span key={index} className={`font-s ${style.box} ${style.disabled}`}>
          ...
        </span>
      ) : (
        <button
          key={page}
          className={`font-s ${style.box} ${
            page === currentPage ? style.select : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      )
    )}
    <GrFormNext
      className={`${style.box} ${style.next} ${
        currentPage === totalPages ? style.disabled : ""
      }`}
      onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
    />
  </div>
);

export default Table;
