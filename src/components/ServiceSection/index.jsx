"use client";

import { servicesSectionConfig } from "@/src/config";
import Slider from "../Slider";
import Services from "./Services";

export default function ServicesSection() {
  return (
    <section
      id={servicesSectionConfig.id}
      className="w-full bg-white bg-blend-screen pt-6 pb-10 px-8 xs:px-12 sm:px-24 md:px-32 md:pt-12 lg:pb-28 xl:px-48 2xl:px-60 3xl:px-0 text-boni-blue-100 flex flex-col items-center gap-4 justify-center"
    >
      <div className="max-w-[1056px] flex flex-col items-center gap-4 justify-center w-full object-contain">
        <h2 className="text-2xl lg:text-3xl font-bold">
          {servicesSectionConfig.title}
        </h2>

        <Slider />
        <Services />
      </div>
    </section>
  );
}
