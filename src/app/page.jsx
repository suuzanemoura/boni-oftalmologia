import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import HeroSection from "@/src/components/HeroSection";
import ServicesSection from "@/src/components/ServiceSection";
import BioSection from "../components/BioSection";
import YoutubeSection from "../components/YoutubeSection";
import { apiConfig } from "../config";
import ClinicSection from "../components/ClinicSection";
import TestimonialSection from "../components/TestimonialSection";
import ScrollToTopButton from "../components/Button/ScrollToTopButton";
import InstagramSection from "../components/InstagramSection";
import { instagramSectionConfig } from "../config/instagramSection";

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
        <InstagramSection instagramSectionConfig={instagramSectionConfig} />
      </main>
      <Footer />
    </>
  );
}
