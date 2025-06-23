import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import CompanyValuesSection from "./components/CompanyValuesSection";
import ContactSection from "./components/ContactSection";
import AcronymSection from "./components/AcronymSection";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AcronymSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <CompanyValuesSection />
      <ContactSection />
    </>
  );
}

export default App;
