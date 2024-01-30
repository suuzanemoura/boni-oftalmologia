"use client";

import { servicesSectionConfig } from "@/src/config";
import Slider from "../Slider/Slider";
import Services from "./Services/Services";

export default function ServicesSection() {
  return (
    <section
      id={servicesSectionConfig.id}
      className="w-full bg-white bg-blend-screen px-8 xs:px-12 sm:px-24 md:px-32 pt-6 lg:pt-12 pb-10 lg:pb-28 text-boni-blue-100 flex flex-col items-center gap-4 justify-center"
    >
      <h2 className="text-2xl lg:text-3xl font-bold xl:px-32">
        {servicesSectionConfig.title}
      </h2>
      <Slider />
      <Services />
    </section>
  );
}
