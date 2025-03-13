import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
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
