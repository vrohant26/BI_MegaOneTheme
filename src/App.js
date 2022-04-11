// import Services from "./components/Services";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PressRoom from "./components/PressRoom";
import Preloader from "./components/Preloader";
import ScrollTop from "./components/ScrollTop";
import SliderSection from "./components/MainSection/SliderSection";
// import SponsersSection from "./components/SponsersSection";
// import StatsSection from "./components/StatsSection";
// import TeamSection from "./components/TeamSection";
// import TestimonialSection from "./components/TestimonialSection";
// import About from "./components/AboutSection/About";
import About from "./components/AboutSection/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SliderSection />} />
          <Route path="About" element={<About />} />

          {/* <SponsersSection />
          <StatsSection />
          <TeamSection />
          <Services /> */}

          <Route path="PressRoom" element={<PressRoom />} />
          {/* <TestimonialSection /> */}
          <Route path="Contact" element={<ContactSection />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
