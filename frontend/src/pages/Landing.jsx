import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import TrustedDocs from "../components/landing/TrustedDocs";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import AIDemo from "../components/landing/AIDemo";
import Stats from "../components/landing/Stats";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import { Link } from "react-router-dom";


function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedDocs />
      <Features />
      <HowItWorks />
      <AIDemo />
      <Stats />
      <CTA />
      <Footer />
    </>  
  );
}

export default Landing;