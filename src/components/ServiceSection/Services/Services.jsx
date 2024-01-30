import { servicesConfig } from "@/src/config";
import Carousel from "../../Carousel/Carousel";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="lg:mt-12 mb-12 lg:mb-6 mx-auto">
      <h2 className="text-3xl 2xs:text-4xl leading-8 font-semibold mb-12 text-slate-700">
        {servicesConfig.title}
      </h2>
      <div className="relative overflow-hidden max-w-[224px] 3xs:max-w-[256px] xs:max-w-[400px] md:max-w-[520px] lg:max-w-[790px] xl:max-w-[1055px]">
        <Carousel width={256}>
          {servicesConfig.services.map((service, index) => {
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
