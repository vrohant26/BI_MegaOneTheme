import React, { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import SliderSection from "./components/MainSection/SliderSection";
import Navbar from "./components/Navbar";

export default function HealthcarePage({ setMove, Switch }) {
  return (
    <>
      <Navbar setMove={setMove} Switch={Switch} />
      <Outlet />
      <Footer />
    </>
  );
}
