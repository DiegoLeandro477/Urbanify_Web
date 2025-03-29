import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import style from "./style.module.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
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

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className={style.pagination}>
      <GrFormPrevious
        className={`${style.box} ${style.prev} ${currentPage === 1 ? style.disabled : ""}`}
        onClick={() => currentPage > 1 && changePage(currentPage - 1)}
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
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        )
      )}
      <GrFormNext
        className={`${style.box} ${style.next} ${currentPage === totalPages ? style.disabled : ""}`}
        onClick={() => currentPage < totalPages && changePage(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
