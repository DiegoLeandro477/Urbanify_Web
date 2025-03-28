import React from "react";
import style from "./style.module.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Modal from "../modal/Modal";

const Card = ({ urls }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? urls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`${style.card}`}>
      <div className={style.card__frame}>
        <GrFormPrevious className={style.prev} onClick={handlePrev} />
        <GrFormNext className={style.next} onClick={handleNext} />
        <img
          className={`img ${style.card__image}`}
          src={urls[currentIndex]}
          alt="Imagem"
        />
      </div>

      <div className={`${style.card__content}`}>
        <h3 className={`font-l c2 mb-1 ${style.card__title}`}>
          Você deseja reparar este trecho
        </h3>

        <div className={style.card__buttons}>
          <button className="font-s btn-outline">Não agora</button>

          <button
            onClick={() => setModalOpen(true)}
            className="font-s btn-primary"
          >
            Sim, eu quero
          </button>
        </div>
      </div>

      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Card;
