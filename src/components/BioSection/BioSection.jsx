"use client";

import Image from "next/image";
import { useFontContext } from "@/src/contexts/FontContext";
import Button from "../Button/Button";
import { bioSectionConfig } from "@/src/config";

export default function BioSection() {
  const { textSize } = useFontContext();

  return (
    <section
      id={bioSectionConfig.id}
      className="flex items-center justify-center px-8 py-24 xs:px-12 sm:px-24 md:py-28 md:px-32 xl:px-48 2xl:px-60 3xl:px-0"
    >
      <div className="w-full max-w-[1056px] flex flex-col lg:flex-row items-center gap-12 justify-center">
        <div className="w-full">
          <Image
            src={bioSectionConfig.img}
            alt={bioSectionConfig.alt}
            className="w-full h-full object-cover object-center xs:object-top rounded-xl"
            loading="lazy"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-title uppercase text-sky-400">
              {bioSectionConfig.title}
            </h2>
            <h3 className={`${textSize} font-medium`}>
              {bioSectionConfig.subtitle}
            </h3>
          </div>

          {bioSectionConfig.description.map((para, index) => {
            return (
              <p
                key={index}
                className={`${textSize} text-pretty`}
              >
                {para}
              </p>
            );
          })}
          <Button
            linkButton={bioSectionConfig.button_link}
            fontSize={textSize}
          >
            {bioSectionConfig.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
