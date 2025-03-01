import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <img src="../../public/vite.svg" alt="image simples" />
      <ul>
        <NavLink to={"/"}>
          <li>HOME</li>
        </NavLink>
        <NavLink to={"/Dashboard"}>
          <li>DASHBOARD</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
