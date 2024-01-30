import SliderImg01 from "@/public/images/image_slider_01.JPG";
import SliderImg02 from "@/public/images/image_slider_02.JPG";
import SliderImg03 from "@/public/images/image_slider_03.jpeg";
import SliderImg04 from "@/public/images/image_slider_04.JPG";

import Service01 from "@/public/images/image_catarata.jpg";
import Service02 from "@/public/images/image_glaucoma.jpg";
import Service03 from "@/public/images/image_cirurgia_refrativa.jpg";
import Service04 from "@/public/images/image_ceratocone.jpg";
import Service05 from "@/public/images/image_plastica_ocular.png";

export const servicesSectionConfig = {
  id: "serviços",
  title:
    "Meu propósito é fazer com que o paciente tenha uma experiencia única e sinta-se acolhido e confiante no tratamento oftalmológico!",
  slider_items: [
    {
      img: SliderImg01,
      alt: "Imagem do consultório do Dr. Pedro Boni",
      title: "Atendimento exclusivo, personalizado e humanizado",
      description:
        "Estudando caso a caso, avaliando o perfil do paciente e respeitando os limites de cada tratamento.",
    },
    {
      img: SliderImg02,
      alt: "Paciente passando por avaliação ocular no consultório do Dr. Pedro Boni",
      title: "Especialista em Catarata, Glaucoma e Córnea",
      description: "Tenho vasta experiência em diversos tratamentos oculares.",
    },
    {
      img: SliderImg03,
      alt: "Imagem do Dr. Pedro Boni enquanto realiza uma cirugia.",
      title: "Oftalmologista cirurgião",
      description:
        "Especializado em cirurgias de Catarata e para diminuir a necessidade dos óculos.",
    },
    {
      img: SliderImg04,
      alt: "Imagem do consultório do Dr. Pedro Boni",
      title: "Clínica moderna",
      description: "Com amplos espaços e equipamentos de última geração.",
    },
  ],
};

export const servicesConfig = {
  title: "Experiência em:",
  services: [
    {
      title: "Catarata",
      imageUrl: Service01,
    },
    {
      title: "Glaucoma",
      imageUrl: Service02,
    },
    {
      title: "Cirurgia Refrativa",
      imageUrl: Service03,
    },
    {
      title: "Ceratocone",
      imageUrl: Service04,
    },
    {
      title: "Plástica Ocular",
      imageUrl: Service05,
    },
  ],
};
