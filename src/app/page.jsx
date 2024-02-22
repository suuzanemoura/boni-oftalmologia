import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroSection from "@/src/components/HeroSection/HeroSection";
import ServicesSection from "@/src/components/ServiceSection/ServicesSection";
import BioSection from "../components/BioSection/BioSection";
import YoutubeSection from "../components/YoutubeSection/YoutubeSection";
import { apiConfig } from "../config";
import ClinicSection from "../components/ClinicSection/ClinicSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import ScrollToTopButton from "../components/Button/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollToTopButton />
        <HeroSection />
        <ServicesSection />
        <BioSection />
        <YoutubeSection apiConfig={apiConfig} />
        <ClinicSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
