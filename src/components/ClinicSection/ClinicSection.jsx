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
      className="flex justify-center items-center px-8 py-24 xs:px-12 sm:px-24 md:py-28 md:px-32 xl:px-48 2xl:px-60 3xl:px-0"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 justify-center max-w-[1056px]">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl xs:text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold font-title uppercase text-sky-400">
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
        <div className="lg:min-w-96 min-h-fit">
          <Image
            src={clinicSectionConfig.img}
            alt={clinicSectionConfig.alt}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
