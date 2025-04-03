import React, { useRef, useEffect, useState } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect/index";
import "flatpickr/dist/plugins/monthSelect/style.css";

const DatePicker = ({ onChange }) => {
  const inputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fp = Flatpickr(inputRef.current, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      plugins: [
        new monthSelectPlugin({
          shorthand: true,
          dateFormat: "Y-m",
          altFormat: "F Y",
        }),
      ],
      onChange: (selectedDates) => {
        setSelectedDate(selectedDates[0]);
        if (onChange) {
          onChange(selectedDates[0]);
        }
      },
    });

    return () => fp.destroy();
  }, [onChange]);

  return <input ref={inputRef} type="text" placeholder="Select date..." />;
};

export default DatePicker;
