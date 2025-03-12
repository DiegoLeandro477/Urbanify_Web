import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="container-bg header-bg">
      <nav className="container header-container">
        <img
          src="/src/assets/images/LogoProvisoriaBranca.png"
          alt="image simples"
        />
        <div className="header-perfil">
          <img
            className="header-perfil-img"
            src="/src/assets/images/imgPerfil.png"
          />
          <span className="header-perfil-name">Secretário</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
