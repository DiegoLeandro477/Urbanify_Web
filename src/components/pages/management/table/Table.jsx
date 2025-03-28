import React, { useState, useEffect, useCallback } from "react";
import style from "./style.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { getReportStatusName } from "../../../../utils/environment";
import { formatDate } from "../../../../utils/formatDate";
import { countSeveritiesReport } from "../../../../utils/countSeveritiesReport";
import { GET } from "../../../../services/requestHTTP";

const Table = ({ reports, setReports, urls, setUrls }) => {
  const [order, setOrder] = useState({ column: null, direction: "asc" });
  const [reportKey, setReportKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 7;
  const totalPages = Math.ceil(reports.length / reportsPerPage);
  const currentReports = reports.slice(
    (currentPage - 1) * reportsPerPage,
    currentPage * reportsPerPage
  );

  const sortData = (column) => {
    setCurrentPage(1);

    const newDirection =
      order.column === column && order.direction === "asc" ? "desc" : "asc";

    const sortedData = [...reports].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setReports(sortedData);
    setOrder({ column, direction: newDirection });

    console.log(order);
  };

  const getSortingIcon = (column) => {
    if (order.column === column) {
      return order.direction === "asc" ? "▲" : "▼";
    }
    return "⇅";
  };

  const fetchReportData = useCallback(
    async (address, geohash) => {
      try {
        const res = await GET(`/report/address/${address}/geohash/${geohash}`);
        setUrls(res.data.data.urls);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    },
    [setUrls]
  );

  const handleReportClick = useCallback(
    (index, address, geohash) => {
      setReportKey(index);
      fetchReportData(address, geohash);
    },
    [fetchReportData]
  );

  useEffect(() => {
    if (urls.length === 0 && currentReports.length > 0) {
      handleReportClick(
        0,
        currentReports[0].address,
        currentReports[0].geohash
      );
    }
  }, [currentReports, urls, handleReportClick]);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    const firstReport = reports[(newPage - 1) * reportsPerPage];
    if (firstReport) {
      handleReportClick(0, firstReport.address, firstReport.geohash);
    }
  };

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

  return (
    <div>
      <table className={style.table}>
        <thead className={style.table__header}>
          <tr className={style.header__list}>
            <th className="font-s c2" onClick={() => sortData("district")}>
              <span>Bairro</span>
              <div>{getSortingIcon("district")}</div>
            </th>
            <th className="font-s c2" onClick={() => sortData("street")}>
              <span>Rua</span>
              <div>{getSortingIcon("street")}</div>
            </th>
            <th className="font-s c2" onClick={() => sortData("status")}>
              <span>Status</span>
              <div>{getSortingIcon("status")}</div>
            </th>
            <th className="font-s c2" onClick={() => sortData("reports")}>
              <span>Relatos</span>
              <div>{getSortingIcon("reports")}</div>
            </th>
            <th className="font-s c2" onClick={() => sortData("severes")}>
              <span>Relatos Graves</span>
              <div>{getSortingIcon("district")}</div>
            </th>
            <th className="font-s c2" onClick={() => sortData("moderates")}>
              <span>Relatos Moderados</span>
              <div>{getSortingIcon("district")}</div>
            </th>
            <th className="font-s c2" onClick={() => sortData("date")}>
              <span>Data</span>
              <div>{getSortingIcon("district")}</div>
            </th>
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
              <td className="font-s c4">
                {countSeveritiesReport(report).severe}
              </td>
              <td className="font-s c4">
                {countSeveritiesReport(report).moderate}
              </td>
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

const Pagination = ({ currentPage, totalPages, onPageChange, getPages }) => (
  <div className={style.pagination}>
    <GrFormPrevious
      className={`${style.box} ${style.prev} ${currentPage === 1 ? style.disabled : ""}`}
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
          className={`font-s ${style.box} ${page === currentPage ? style.select : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      )
    )}
    <GrFormNext
      className={`${style.box} ${style.next} ${currentPage === totalPages ? style.disabled : ""}`}
      onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
    />
  </div>
);

export default Table;
