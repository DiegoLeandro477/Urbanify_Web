import React from "react";
import style from "./style.module.css";

const ModalCreateReport = ({ setModalOpen }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.card}>
        <div className={`${style.card__content}`}>
          <h3 className={`font-l-b c2 mb-1 ${style.card__title}`}>
            Confirmação de Reparo
          </h3>

          <p className={`font-m-b c2 mb-05`}>LOCAL: .</p>
          <p className={`font-m-b c2 mb-1`}>TOTAL DE RELATOS: </p>

          <p className={`font-s c4 mb-2`}>
            Ao confirmar o reparo, todos os cidadãos que reportaram serão
            notificados de que a ocorrência será incluída no plano de reparos.
          </p>

          <div className={`font-m c4  ${style.card__buttons}`}>
            <button
              className={`font-s btn-outline ${style.card__button}`}
              onClick={handleOverlayClick}
            >
              Cancelar
            </button>

            <button
              className={`font-s btn-primary ${style.card__button}`}
              onClick={handleOverlayClick}
            >
              Confirmar reparo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateReport;
