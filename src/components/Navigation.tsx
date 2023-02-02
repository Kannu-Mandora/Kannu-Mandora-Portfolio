import React, { lazy } from "react";
import Navbar from "./tsx/navigates/Navbar";
import Hamburger from "./tsx/navigates/Hamburger";
import { Outlet } from "react-router-dom";
const Footer = lazy(() => import("../components/Footer"));
const Navigation = () => {
  return (
    <>
      <Hamburger />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
