import React from "react";
import "./style.css";

const Ranking = () => {
  return (
    <section>
      <h3 className="font-s mb-2 c2">Bairros mais reportados</h3>

      <div className="ranking">
        <div className="rankink__item">
          <div className="rankin__left">
            <span className="font-xs ranking__position">1</span>
            <p className="font-s c4 ranking__text">Bairro de fátima</p>
          </div>
          <span className="font-s c4">726</span>
        </div>
        <div className="rankink__item">
          <div className="rankin__left">
            <span className="font-xs ranking__position">2</span>
            <p className="font-s c4 ranking__text">Bairro de fátima</p>
          </div>
          <span className="font-s c4">726</span>
        </div>
        <div className="rankink__item">
          <div className="rankin__left">
            <span className="font-xs ranking__position">3</span>
            <p className="font-s c4 ranking__text">Bairro de fátima</p>
          </div>
          <span className="font-s c4">726</span>
        </div>
        <div className="rankink__item">
          <div className="rankin__left">
            <span className="font-xs ranking__position">4</span>
            <p className="font-s c4 ranking__text">Bairro de fátima</p>
          </div>
          <span className="font-s c4">726</span>
        </div>
        <div className="rankink__item">
          <div className="rankin__left">
            <span className="font-xs ranking__position">5</span>
            <p className="font-s c4 ranking__text">Bairro de fátima</p>
          </div>
          <span className="font-s c4">726</span>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
