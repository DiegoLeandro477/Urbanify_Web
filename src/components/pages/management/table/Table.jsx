import React from "react";
import style from "./style.module.css";

import { getReportStatusName } from "../../../../utils/environment";
import { countSeveritiesReport } from "../../../../utils/countSeveritiesReport";

const Table = ({ reports, setReports, urls, setUrls }) => {
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

  React.useEffect(() => {
    setData(
      reports.map((report) => {
        console.log(new Date(report.created_at), report.created_at);

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

    console.log(data);
  }, [reports]);

  const sortData = (column) => {
    const newDirection =
      order.column === column && order.direction === "asc" ? "desc" : "asc";

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setOrder({ column, direction: newDirection });
  };

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
        onClick={() => sortData(item.column)}
      >
        <span>{item.title}</span>
        <div>{getIconeOrdenacao(item.column)}</div>
      </th>
    );
  });

  const Bodies = data.map((item, index) => {
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
    </div>
  );
};

export default Table;
