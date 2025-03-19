import React from "react";
// import style from "./style.module.css";

const Ranking = (bairrosContagem) => {
  // ORDENA E MOSTA OS 10 PRIMEIROS DO RANK
  const topBairros = bairrosContagem.bairrosContagem
    .sort((a, b) => b.quanti_registrada - a.quanti_registrada)
    .slice(0, 10);

  return (
    <section>
      <h3 className={`font-s mb-1-5 c2`}>Bairros mais reportados</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {topBairros.map((bairro, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {index + 1}
            </span>
            <span style={{ flexGrow: 1 }}>{bairro.nome_bairro}</span>
            <span>{bairro.quanti_registrada}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ranking;
