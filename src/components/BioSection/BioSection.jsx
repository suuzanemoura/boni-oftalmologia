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
      className="w-full px-8 py-24 lg:p-28 xl:py-36 xl:px-60 flex flex-col lg:flex-row items-center gap-12 justify-center"
    >
      <div className="w-[14rem] 2xs:w-[16rem] xs:w-[24rem] md:w-[32rem] lg:w-[26rem] h-[30rem] xs:h-[36rem] lg:h-[40rem]">
        <Image
          src={bioSectionConfig.img}
          alt={bioSectionConfig.alt}
          className="w-full h-full object-cover object-center xs:object-top rounded-xl"
          loading="lazy"
        />
      </div>
      <div
        className={
          "max-w-64 xs:max-w-sm md:max-w-lg flex flex-col gap-4 items-center lg:items-start"
        }
      >
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
              className={`${textSize}`}
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
    </section>
  );
}
