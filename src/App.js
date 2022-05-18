import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PressRoom from "./components/PressRoom";
import ScrollTop from "./components/ScrollTop";
import SliderSection from "./components/MainSection/SliderSection";
import About from "./components/AboutSection/About";
import CityInfo from "./components/MainSection/Cities/CityInfo";
import Experience from "./components/ExperienceSection/Experience";
import SplashScreen from "./SplashScreen";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HealthcarePage from "./HealthcarePage";

function App() {
  const [Switch, setSwitch] = useState(true);
  const toggle = () => {
    setSwitch(!Switch);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route
            path="Healthcare"
            element={<HealthcarePage setMove={setSwitch} Switch={Switch} />}
          >
            <Route path="Home" element={<SliderSection />} />
            <Route path="Home/:cityname" element={<CityInfo />} />

            <Route
              path="About"
              element={<About toggle={toggle} move={Switch} />}
            />
            <Route path="Experience" element={<Experience />} />
            <Route path="PressRoom" element={<PressRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Navbar setMove={setSwitch} Switch={Switch} />
        <Routes>
          <Route path="/" element={<SliderSection />} />
          <Route path=":cityname" element={<CityInfo />} />
          <Route
            path="About"
            element={<About move={Switch} toggle={toggle} />}
          />
          <Route path="Experience" element={<Experience />} />
          <Route path="PressRoom" element={<PressRoom />} />
          <Route path="Contact" element={<ContactSection />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollTop /> */}
    </>
  );
}

export default App;
