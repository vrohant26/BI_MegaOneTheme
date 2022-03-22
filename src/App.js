import Services from "./components/Services";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PressRoom from "./components/PressRoom";
import Preloader from "./components/Preloader";
import ScrollTop from "./components/ScrollTop";
import SliderSection from "./components/SliderSection";
import SponsersSection from "./components/SponsersSection";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <SliderSection />
      <SponsersSection />
      <StatsSection />
      <TeamSection />
      <Services />
      <PressRoom />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
