import React from "react";
import style from "./style.module.css";

import { MdOutlineDateRange } from "react-icons/md";

import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";

const DateRanger = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    flatpickr(inputRef.current, {
      mode: "range",
      dateFormat: "d/m/Y",
      locale: Portuguese, //
    });
  }, []);

  return (
    <div className={`${style.picker__box}`}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Data inicial -> Data final"
        className={`font-xs c4 ${style.picker__input}`}
      />

      <MdOutlineDateRange className="c4" />
    </div>
  );
};

export default DateRanger;
