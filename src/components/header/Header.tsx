import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="container-bg">
      <nav className="container">
        <img
          src="/src/assets/images/LogoProvisoriaBranca.png"
          alt="image simples"
        />
        <div className="perfil">
          <img className="perfil-img" src="/src/assets/images/imgPerfil.png" />
          <span className="perfil-name">Secretário</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
