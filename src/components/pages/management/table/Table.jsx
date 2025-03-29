import React from "react";
import style from "./style.module.css";

import Pagination from "../../../pagination/Pagination";

import { getReportStatusName } from "../../../../utils/environment";
import { countSeveritiesReport } from "../../../../utils/countSeveritiesReport";
import { sortData } from "../../../../utils/sortData";

const Table = ({ reports, urls, setUrls }) => {
  const [data, setData] = React.useState([]);
  const [order, setOrder] = React.useState({ column: null, direction: "asc" });
  const [headerColumns] = React.useState([
    { title: "Bairro", column: "district" },
    { title: "Rua", column: "street" },
    { title: "Status", column: "status" },
    { title: "Relatos", column: "reports" },
    { title: "Relatos Graves", column: "severeReports" },
    { title: "Relatos Moderados", column: "moderateReports" },
    { title: "Data", column: "date" },
  ]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const reportsPerPage = 7;
  const totalPages = Math.ceil(data.length / reportsPerPage);
  const start = (currentPage - 1) * reportsPerPage;
  const end = start + reportsPerPage;
  const paginatedReports = data.slice(start, end);

  React.useEffect(() => {
    setData(
      reports.map((report) => {
        return {
          ...report,
          status: getReportStatusName(report.status),
          reports: report.childrens.length,
          severeReports: countSeveritiesReport(report).severe,
          moderateReports: countSeveritiesReport(report).moderate,
          date: new Date(report.created_at).getTime(),
        };
      })
    );
  }, [reports]);

  const getIconeOrdenacao = (column) => {
    if (order.column === column) {
      return order.direction === "asc" ? "▲" : "▼"; // Setas Unicode
    }
    return "⇅"; // Ícone neutro
  };

  const Headers = headerColumns.map((item, index) => {
    return (
      <th
        key={index}
        className="font-s c2"
        onClick={() =>
          sortData({ column: item.column, order, setOrder, data, setData })
        }
      >
        <span>{item.title}</span>
        <div>{getIconeOrdenacao(item.column)}</div>
      </th>
    );
  });

  const Bodies = paginatedReports.map((item, index) => {
    const date = new Date(item.created_at);

    return (
      <tr key={index} className={`${style.body__list}`}>
        <td className="font-s c4">{item.district}</td>
        <td className="font-s c4">{item.street}</td>
        <td className="font-s c4">{item.status}</td>
        <td className="font-s c4">{item.reports}</td>
        <td className="font-s c4">{item.severeReports}</td>
        <td className="font-s c4">{item.moderateReports}</td>
        <td className="font-s c4">{`${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className={style.table}>
        <thead className={style.table__header}>
          <tr className={style.header__list}>{Headers}</tr>
        </thead>
        <tbody className={style.table__body}>{Bodies}</tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
