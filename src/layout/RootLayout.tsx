import React from "react";
import Header from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./styles.css";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="container-bg">
        <div className="container layout">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
