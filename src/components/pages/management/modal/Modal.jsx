import React from "react";
import style from "./style.module.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Card = ({ urls, close, on, reportData }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? urls.length - 1 : prevIndex - 1
    );
  };

  const reportDate = () => {
    const created_at = new Date(reportData.created_at);

    return (
      <span className="font-m-b">
        {" "}
        {String(created_at.getDate()).padStart(2, "0")}/
        {String(created_at.getMonth() + 1).padStart(2, "0")}/
        {String(created_at.getFullYear())}
      </span>
    );
  };

  return (
    <div className={style.overlay} onClick={() => close(false)}>
      <div className={style.card}>
        <div className={style.card__frame}>
          <GrFormPrevious
            className={`font-xl c12 ${style.prev}`}
            onClick={handlePrev}
          />
          <GrFormNext
            className={`font-xl c12 ${style.next}`}
            onClick={handleNext}
          />
          <img
            className={`img ${style.card__image}`}
            src={urls[currentIndex]}
            alt="Imagem"
          />
        </div>

        <div className={`${style.card__content}`}>
          <h3 className={`font-l-b c2 mb-1 ${style.card__title}`}>
            Confirmação de Reparo
          </h3>

          <p className={`font-m-b c4 mb-05`}>
            Local: {reportData.street}, {reportData.district}.
          </p>
          <p className={`font-m-b c4 mb-1`}>
            Total de relatos: {reportData.reports} desde {reportDate()}.
          </p>

          <p className={`font-m c4 mb-2`}>
            Ao confirmar o reparo, todos os cidadãos que reportaram serão
            notificados de que a ocorrência será incluída no plano de reparos.
          </p>

          <div className={`font-m c4  ${style.card__buttons}`}>
            <button
              className={`font-s btn-outline ${style.card__button}`}
              onClick={() => close(false)}
            >
              Cancelar
            </button>

            <button
              className={`font-s btn-primary ${style.card__button}`}
              onClick={() => on()}
            >
              Confirmar reparo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
