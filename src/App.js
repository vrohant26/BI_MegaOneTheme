import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PressRoom from "./components/PressRoom";
// import Preloader from "./components/Preloader";
import ScrollTop from "./components/ScrollTop";
import SliderSection from "./components/MainSection/SliderSection";
import About from "./components/AboutSection/About";
import CityInfo from "./components/MainSection/Cities/CityInfo";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Switch, setSwitch] = useState(true);
  const toggle = () => {
    setSwitch(!Switch);
  };

  return (
    <>
      {/* <Preloader /> */}
      <BrowserRouter>
        <Navbar setMove={setSwitch} Switch={Switch} />
        <Routes>
          <Route path="/" element={<SliderSection />} />
          <Route path=":cityname" element={<CityInfo />} />
          <Route
            path="About"
            element={<About move={Switch} toggle={toggle} />}
          />
          <Route path="PressRoom" element={<PressRoom />} />
          <Route path="Contact" element={<ContactSection />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
