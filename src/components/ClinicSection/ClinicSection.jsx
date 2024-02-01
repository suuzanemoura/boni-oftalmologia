"use client";

import { clinicSectionConfig } from "@/src/config/clinicSection";
import { MapPinIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { useFontContext } from "@/src/contexts/FontContext";

export default function ClinicSection() {
  const { textSize } = useFontContext();
  return (
    <section
      id={clinicSectionConfig.id}
      className="w-full px-8 py-24 lg:p-28 xl:py-36 2xl:px-48 flex flex-col lg:flex-row items-center gap-12 justify-center"
    >
      <div className="flex flex-col gap-8 max-w-64 xs:max-w-[26rem] md:max-w-md lg:max-w-sm xl:max-w-xl ">
        <div>
          <h2 className="text-2xl xs:text-3xl md:text-4xl xl:text-[2.5rem] font-bold font-title uppercase text-sky-400">
            {clinicSectionConfig.title_introduction}
            <br />
            {clinicSectionConfig.title_name}
          </h2>
          <Link
            href={clinicSectionConfig.subtitle_link}
            target="_blank"
            className="hover:underline hover:text-sky-200"
          >
            <h3 className={`${textSize} flex gap-1`}>
              <MapPinIcon className="h-5 w-5" />
              {clinicSectionConfig.subtitle}
            </h3>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {clinicSectionConfig.description.map((para, index) => {
            return (
              <p
                key={index}
                className={`${textSize}`}
              >
                {para}
              </p>
            );
          })}
        </div>
        <Button
          linkButton={clinicSectionConfig.button_link}
          fontSize={textSize}
        >
          {clinicSectionConfig.button}
        </Button>
      </div>
      <div className="max-w-64 xs:max-w-[26rem] lg:max-w-lg xl:max-w-sm items-center lg:items-start">
        <Image
          src={clinicSectionConfig.img}
          alt={clinicSectionConfig.alt}
          className="w-full h-full object-cover object-center xs:object-top rounded-xl"
        />
      </div>
    </section>
  );
}
