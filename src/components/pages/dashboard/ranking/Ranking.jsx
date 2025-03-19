import React from "react";
import style from "./style.module.css";

const Ranking = () => {
  return (
    <section>
      <h3 className={`font-s mb-1-5 c2`}>Bairros mais reportados</h3>

      <div className={`${style.ranking}`}>
        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>1</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>

        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>2</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>

        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>3</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>

        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>4</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>

        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>5</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>

        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>6</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>

        <div className={`${style.rankink__item}`}>
          <div className={`${style.rankin__left}`}>
            <span className={`font-xs ${style.ranking__position}`}>7</span>
            <p className={`font-s c4 ${style.ranking__text}`}>
              Bairro de fátima
            </p>
          </div>
          <span className={`font-s c4`}>726</span>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
