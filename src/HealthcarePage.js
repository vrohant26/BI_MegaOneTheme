import React from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

export default function HealthcarePage({ setMove, Switch }) {
  return (
    <>
      <Navbar setMove={setMove} Switch={Switch} />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
}
