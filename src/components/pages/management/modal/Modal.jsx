import React from "react";
import style from "./style.module.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Card = ({ modalData, setModalData, setModalOpen }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % modalData.urls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modalData.urls.length - 1 : prevIndex - 1
    );
  };

  const reportDate = () => {
    const created_at = new Date(modalData.created_at);

    return (
      <span className="font-m">
        {String(created_at.getDate()).padStart(2, "0")}/
        {String(created_at.getMonth() + 1).padStart(2, "0")}/
        {String(created_at.getFullYear())}
      </span>
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <div className={style.overlay} onClick={handleOverlayClick}>
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
            src={modalData.urls[currentIndex]}
            alt="Imagem"
          />
        </div>

        <div className={`${style.card__content}`}>
          <h3 className={`font-l-b c2 mb-1 ${style.card__title}`}>
            Confirmação de Reparo
          </h3>

          <p className={`font-m-b c2 mb-05`}>
            LOCAL:{" "}
            <span className={`font-m c4`}>
              {modalData.street}, {modalData.district} - {modalData.subregion}
            </span>
            .
          </p>
          <p className={`font-m-b c2 mb-1`}>
            TOTAL DE RELATOS:{" "}
            <span className={`font-m c4`}>
              {modalData.reports} desde {reportDate()}.{" "}
            </span>
          </p>

          <p className={`font-s c4 mb-2`}>
            Ao confirmar o reparo, todos os cidadãos que reportaram serão
            notificados de que a ocorrência será incluída no plano de reparos.
          </p>

          <div className={`font-m c4  ${style.card__buttons}`}>
            <button
              className={`font-s btn-outline ${style.card__button}`}
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </button>

            <button
              className={`font-s btn-primary ${style.card__button}`}
              onClick={() => setModalOpen(false)}
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
