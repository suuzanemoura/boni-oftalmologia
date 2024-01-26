import Carousel from "../../Carousel/Carousel";
import ServiceCard from "./ServiceCard";

import Service01 from "@/public/images/image_catarata.jpg";
import Service02 from "@/public/images/image_glaucoma.jpg";
import Service03 from "@/public/images/image_cirurgia_refrativa.jpg";
import Service04 from "@/public/images/image_ceratocone.jpg";
import Service05 from "@/public/images/image_plastica_ocular.png";

export default function Services() {
  const services = [
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
  ];

  return (
    <div className="lg:mt-12 mb-12 lg:mb-6 mx-auto">
      <h2 className="text-3xl 2xs:text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Experiência em:
      </h2>
      <div className="relative overflow-hidden max-w-[224px] 3xs:max-w-[256px] xs:max-w-[400px] md:max-w-[520px] lg:max-w-[790px] xl:max-w-[1055px]">
        <Carousel width={256}>
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                service={service}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
