import SliderImg01 from "@/public/images/image_slider_01.JPG";
import SliderImg02 from "@/public/images/image_slider_02.JPG";
import SliderImg03 from "@/public/images/image_slider_03.jpeg";
import SliderImg04 from "@/public/images/image_slider_04.JPG";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Slider from "../Slider/Slider";

import Services from "./Services/Services";
import { useContext } from "react";
import { FontContext } from "@/src/contexts/FontContext";

export default function ServicesSection() {
  const { textSize } = useContext(FontContext);
  const sliderItems = [
    {
      img: SliderImg01,
      alt: "Imagem do consultório do Dr. Pedro Boni",
      title: "Atendimento exclusivo, personalizado e humanizado",
      desc: "Estudando caso a caso, avaliando o perfil do paciente e respeitando os limites de cada tratamento.",
      buttonIcon: SparklesIcon,
    },
    {
      img: SliderImg02,
      alt: "Paciente passando por avaliação ocular no consultório do Dr. Pedro Boni",
      title: "Especialista em Catarata, Glaucoma e Córnea",
      desc: "Tenho vasta experiência em diversos tratamentos oculares.",
      buttonIcon: SparklesIcon,
    },
    {
      img: SliderImg03,
      alt: "Imagem do Dr. Pedro Boni enquanto realiza uma cirugia.",
      title: "Oftalmologista cirurgião",
      desc: "Especializado em cirurgias de Catarata e para diminuir a necessidade dos óculos.",
      buttonIcon: SparklesIcon,
    },
    {
      img: SliderImg04,
      alt: "Imagem do consultório do Dr. Pedro Boni",
      title: "Clínica moderna",
      desc: "Com amplos espaços e equipamentos de última geração.",
      buttonIcon: SparklesIcon,
    },
  ];
  return (
    <section className="w-full bg-white bg-blend-screen px-8 xs:px-12 sm:px-24 md:px-32 pt-6 lg:pt-12 pb-10 lg:pb-28 text-boni-blue-100 flex flex-col items-center text-center gap-4">
      <h2 className="text-2xl lg:text-3xl font-bold max-w-6xl">
        Meu propósito é fazer com que o paciente tenha uma experiencia única e
        sinta-se acolhido e confiante no tratamento oftalmológico!
      </h2>
      <p className={`${textSize} text-slate-900 font-medium px-6`}>
        Meu foco é contribuir para que nossos pacientes tenham um novo olhar
        para o mundo.
      </p>
      <Slider items={sliderItems} />
      <Services />
    </section>
  );
}
