import React, { useState } from "react";
import style from "./style.module.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    },
    {
      image:
        "https://img.freepik.com/fotos-gratis/midia-remixada-da-montanha-do-ceu-estrelado-da-natureza-da-galaxia_53876-126761.jpg?semt=ais_hybrid",
    },
    {
      image: "https://pixlr.com/images/generator/text-to-image.webp",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.card}>
      <div className={style.card__frame}>
        <GrFormPrevious className={style.prev} onClick={handlePrev} />
        <GrFormNext className={style.next} onClick={handleNext} />
        <img
          className={`img ${style.card__image}`}
          src={slides[currentIndex].image}
          alt="Imagem"
        />
      </div>

      <div className={`${style.card__content}`}>
        <h3 className={`font-l c2 mb-1 ${style.card__title}`}>
          Você deseja reparar este trecho
        </h3>

        <div className={style.card__buttons}>
          <button className="font-s btn-outline">Não agora</button>

          <button className="font-s btn-primary">Sim, eu quero</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
