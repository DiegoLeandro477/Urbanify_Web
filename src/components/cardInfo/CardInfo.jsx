import React from "react";
import "./styles.css";

import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const CardInfo = ({ title, value, incrementValue }) => {
  const incrementText =
    incrementValue > 0
      ? `Acréscimo de ${incrementValue}%`
      : `Redução de ${incrementValue}%`;

  const incrementIcon =
    incrementValue > 0 ? (
      <FaCaretUp className="green" />
    ) : (
      <FaCaretDown className="red" />
    );

  return (
    <div className="card-container">
      <span className="font-s c4">{title}</span>
      <span className="font-xl c2 value">{value}</span>
      <div className="card__increment">
        <span className="font-xs c4">{incrementText}</span>
        {incrementIcon}
      </div>
    </div>
  );
};

export default CardInfo;
