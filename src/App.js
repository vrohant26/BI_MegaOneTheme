import PressRoom from "./components/PressRoom";
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
    </>
  );
}

export default App;
