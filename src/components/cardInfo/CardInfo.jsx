import React from "react";
import "./styles.css";

const CardInfo = ({ title, value, incrementValue }) => {
  return (
    <div className="card-container">
      <span className="font-s c4">{title}</span>
      <span className="font-xl c2 value">{value}</span>
      <span className="font-xs c4">{incrementValue}</span>
    </div>
  );
};

export default CardInfo;
