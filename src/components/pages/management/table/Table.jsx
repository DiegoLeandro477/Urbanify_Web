import { useEffect, useState, useRef } from "react";
import style from "./style.module.css";

import Pagination from "../../../pagination/Pagination";
import { getReportStatusName } from "../../../../utils/environment";
import { countSeveritiesReport } from "../../../../utils/countSeveritiesReport";
import { sortData } from "../../../../utils/sortData";

const Table = ({ reports = [], onSelected }) => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState({ column: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [reportIndex, setReportIndex] = useState(0);

  // Letreiro
  const [hoveredCell, setHoveredCell] = useState(null);
  const hoverTimeoutRef = useRef(null);

  // Função para lidar com o hover
  const handleCellHover = (cellId, contentWidth, containerWidth) => {
    if (contentWidth > containerWidth) {
      setHoveredCell({ cellId, shouldScroll: true });
    }
  };

  const handleCellLeave = () => {
    setHoveredCell(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const headerColumns = [
    { title: "Bairro", column: "district" },
    { title: "Rua", column: "street" },
    { title: "Status", column: "status" },
    { title: "Relatos", column: "reports" },
    { title: "Relatos Graves", column: "severeReports" },
    { title: "Relatos Moderados", column: "moderateReports" },
    { title: "Data", column: "date" },
  ];

  const reportsPerPage = 7;
  const totalPages = Math.ceil(data.length / reportsPerPage);
  const start = (currentPage - 1) * reportsPerPage;
  const end = start + reportsPerPage;
  const paginatedReports = data.slice(start, end);

  useEffect(() => {
    if (reports.length > 0) {
      const formattedReports = reports.map((report) => ({
        ...report,
        status: getReportStatusName(report.status),
        reports: report.childrens.length,
        severeReports: countSeveritiesReport(report).severe,
        moderateReports: countSeveritiesReport(report).moderate,
        date: new Date(report.created_at).getTime(),
      }));

      setData(formattedReports);
    }
  }, [reports]);

  const getIconeOrdenacao = (column) => {
    if (order.column === column) {
      return order.direction === "asc" ? "▲" : "▼";
    }
    return "⇅";
  };

  const changeReportIndex = async ({ report, index }) => {
    setReportIndex(index);
    onSelected(report);
  };

  return (
    <div className={style.tableContainer}>
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead className={style.table__header}>
            <tr className={style.header__list}>
              {headerColumns.map((item, index) => (
                <th
                  key={index}
                  className="font-s c2"
                  onClick={() =>
                    sortData({
                      column: item.column,
                      order,
                      setOrder,
                      data,
                      setData,
                    })
                  }
                >
                  <span>{item.title}</span>
                  <div>{getIconeOrdenacao(item.column)}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={style.table__body}>
            {paginatedReports.map((item, index) => {
              const date = new Date(item.created_at);
              // Letreiro
              const dateStr = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

              return (
                <tr
                  key={index}
                  className={`${style.body__list} ${index === reportIndex && style.body__list_select}`}
                  onClick={() => {
                    changeReportIndex({ report: item, index });
                  }}
                >
                  <td
                    className="font-s c4"
                    onMouseEnter={(e) => {
                      const container = e.currentTarget;
                      const content = container.querySelector(
                        `.${style.marquee_content}`
                      );
                      if (content.scrollWidth > container.offsetWidth) {
                        hoverTimeoutRef.current = setTimeout(() => {
                          handleCellHover(
                            `district-${index}`,
                            content.scrollWidth,
                            container.offsetWidth
                          );
                        }, 1000);
                      }
                    }}
                  >
                    <div className={style.marquee_container}>
                      <div
                        className={`${style.marquee_content} ${
                          hoveredCell?.cellId === `district-${index}` &&
                          hoveredCell?.shouldScroll
                            ? style.marquee_animate
                            : ""
                        }`}
                      >
                        {item.district}
                      </div>
                    </div>
                  </td>
                  {/* Rua */}
                  <td
                    className="font-s c4"
                    onMouseEnter={(e) => {
                      const content = e.currentTarget.querySelector(
                        `.${style.marquee_content}`
                      );
                      if (content.scrollWidth > e.currentTarget.offsetWidth) {
                        hoverTimeoutRef.current = setTimeout(() => {
                          handleCellHover(
                            `street-${index}`,
                            content.scrollWidth,
                            e.currentTarget.offsetWidth
                          );
                        }, 1000);
                      }
                    }}
                    onMouseLeave={handleCellLeave}
                  >
                    <div className={style.marquee_container}>
                      <div
                        className={`${style.marquee_content} ${
                          hoveredCell?.cellId === `street-${index}` &&
                          hoveredCell?.shouldScroll
                            ? style.marquee_animate
                            : ""
                        }`}
                      >
                        {item.street}
                      </div>
                    </div>
                  </td>
                  <td className="font-s c4">{item.status}</td>
                  <td className="font-s c4">{item.reports}</td>
                  <td className="font-s c4">{item.severeReports}</td>
                  <td className="font-s c4">{item.moderateReports}</td>
                  {/* Data */}
                  <td
                    className="font-s c4"
                    onMouseEnter={(e) => {
                      const content = e.currentTarget.querySelector(
                        `.${style.marquee_content}`
                      );
                      if (content.scrollWidth > e.currentTarget.offsetWidth) {
                        hoverTimeoutRef.current = setTimeout(() => {
                          handleCellHover(
                            `date-${index}`,
                            content.scrollWidth,
                            e.currentTarget.offsetWidth
                          );
                        }, 1000);
                      }
                    }}
                    onMouseLeave={handleCellLeave}
                  >
                    <div className={style.marquee_container}>
                      <div
                        className={`${style.marquee_content} ${
                          hoveredCell?.cellId === `date-${index}` &&
                          hoveredCell?.shouldScroll
                            ? style.marquee_animate
                            : ""
                        }`}
                      >
                        {dateStr}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
