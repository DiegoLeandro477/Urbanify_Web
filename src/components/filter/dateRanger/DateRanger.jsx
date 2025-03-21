import React, { useState } from "react";
import style from "./style.module.css";

import { MdOutlineDateRange } from "react-icons/md";

import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";

const DateRanger = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState("");

  console.log("data: ", data);
  useEffect(() => {
    flatpickr(inputRef.current, {
      mode: "range",
      dateFormat: "d/m/Y",
      locale: Portuguese,

      onChange: (selectedDatesArray) => {
        if (selectedDatesArray.length === 2) {
          // Formatando a data antes de salvar no estado
          const formattedDates = selectedDatesArray
            .map((date) => date.toLocaleDateString("pt-BR")) // Converte para "dd/mm/yyyy"
            .join(" -> "); // Junta as duas datas com "->"

          setData(formattedDates);
        }
      },
    });
  }, []);

  return (
    <div className={`${style.picker__box}`}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Data inicial -> Data final"
        className={`font-xs c4 ${style.picker__input}`}
        value={data} // Garante que o input reflete o estado
        readOnly // Evita edição manual
      />

      <MdOutlineDateRange className="c4" />
    </div>
  );
};

export default DateRanger;
