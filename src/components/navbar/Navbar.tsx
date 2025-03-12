import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <nav className=" navbar">
      <div className="navbar__content">
        <div className="logo__frame">
          <img
            src="/src/assets/images/logo-white.svg "
            className="img logo__img"
            alt="image simples"
          />
        </div>
        <div className="header-perfil">
          <img
            className="header-perfil-img"
            src="/src/assets/images/profile.png"
          />
          <span className="font-s c12">Secretário</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
