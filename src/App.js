import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import Preloader from "./components/Preloader";
import ScrollTop from "./components/ScrollTop";
import SliderSection from "./components/SliderSection";
import SponsersSection from "./components/SponsersSection";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Preloader />
      <Header />
      <SliderSection />
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <PortfolioSection />
      <TestimonialSection />
      <SponsersSection />
      <Services />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
