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
      className="w-full px-8 py-24 lg:p-28 xl:py-36 xl:px-60 flex flex-col lg:flex-row items-center gap-12 justify-center"
    >
      <div className="flex flex-col gap-8 max-w-64 xs:max-w-[26rem] md:max-w-xl items-center lg:items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-title uppercase text-sky-400">
            {clinicSectionConfig.title}
          </h2>
          <Link
            href={clinicSectionConfig.subtitle_link}
            target="_blank"
            className="hover:underline hover:text-sky-400"
          >
            <h3 className="flex gap-1">
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
      <div className="max-w-64 xs:max-w-[26rem] md:max-w-xl items-center lg:items-start">
        <Image
          src={clinicSectionConfig.img}
          alt={clinicSectionConfig.alt}
          className="w-full h-full object-cover object-center xs:object-top rounded-xl"
        />
      </div>
    </section>
  );
}
