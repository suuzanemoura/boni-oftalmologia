import { servicesConfig } from "@/src/config";
import Carousel from "../../Carousel";
import ServiceCard from "../ServicesCard";

export default function Services() {
  return (
    <div className="w-full h-full object-contain overflow-hidden lg:mt-12 mb-12 lg:mb-6 max-w-[1050px]">
      <h2 className="text-3xl 2xs:text-4xl leading-8 font-semibold mb-8 text-slate-700">
        {servicesConfig.title}
      </h2>
      <div className="relative overflow-hidden w-full h-full object-contain">
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
