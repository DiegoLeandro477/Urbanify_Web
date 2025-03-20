import React from "react";
// import style from "./style.module.css";

const Ranking = ({ rank }) => {
  // ORDENA E MOSTA OS 10 PRIMEIROS DO RANK
  const topBairros = rank
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
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "var(--red)",
                  color: "var(--c12)",
                  width: "1.5rem",
                  height: "1.5rem",
                  padding: "0.5rem",
                  borderRadius: "50%",
                }}
              >
                {index + 1}
              </span>
              <span
                className="c2"
                style={{
                  maxWidth: "20ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {bairro.nome_bairro}
              </span>
            </div>
            <span className="c2">{bairro.quanti_registrada}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ranking;
