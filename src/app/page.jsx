import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroSection from "@/src/components/HeroSection/HeroSection";
import ServicesSection from "@/src/components/ServiceSection/ServicesSection";
import BioSection from "../components/BioSection/BioSection";
import YoutubeSection from "../components/YoutubeSection/YoutubeSection";
import { apiConfig } from "../config";
import ClinicSection from "../components/ClinicSection/ClinicSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BioSection />
        <YoutubeSection apiConfig={apiConfig} />
        <ClinicSection />
      </main>
      <Footer />
    </>
  );
}
