import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroSection from "@/src/components/HeroSection/HeroSection";
import ServicesSection from "@/src/components/ServiceSection/ServicesSection";
import BioSection from "../components/BioSection/BioSection";
import YoutubeSection from "../components/YoutubeSection/YoutubeSection";
import { apiConfig } from "../config";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={"Vamos preservar"}
          highlight={" a sua visão?"}
          description={
            "Sou oftalmologista, especialista em Catarata, Glaucoma e Córnea, em melhorar sua visão e melhorar sua saúde ocular!"
          }
        />

        <ServicesSection />
        <BioSection />
        <YoutubeSection apiConfig={apiConfig} />
      </main>
      <Footer />
    </>
  );
}
