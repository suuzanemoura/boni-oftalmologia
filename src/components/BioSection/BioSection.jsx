"use client";

import Image from "next/image";
import drPedroBoni from "@/public/images/image_drpedroboni.jpg";
import { useFontContext } from "@/src/contexts/FontContext";
import Button from "../Button/Button";

export default function BioSection() {
  const { textSize } = useFontContext();

  return (
    <section className="w-full px-8 py-24 lg:p-28 xl:py-36 xl:px-60 flex flex-col lg:flex-row items-center gap-12 justify-center">
      <div className="w-[14rem] 2xs:w-[16rem] xs:w-[24rem] md:w-[32rem] lg:w-[26rem] h-[30rem] xs:h-[36rem] lg:h-[40rem]">
        <Image
          src={drPedroBoni}
          alt="Imagem do Dr. Pedro Boni em seu consultório"
          className="w-full h-full object-cover object-center xs:object-top rounded-xl"
        />
      </div>
      <div
        className={
          "max-w-64 xs:max-w-sm md:max-w-lg flex flex-col gap-4 items-center lg:items-start"
        }
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-title uppercase text-sky-400">
            Dr. Pedro Boni
          </h2>
          <h3 className={`${textSize} font-medium`}>
            CRM 48002 MG - RQE 39250 | CRM 866989 RJ - RQE 34273
          </h3>
        </div>

        <p className={`${textSize}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          similique ipsum culpa enim ea reiciendis, sunt nobis numquam neque
          doloremque nostrum cupiditate corporis facere cum sit consectetur
          praesentium dolores! Deserunt!
        </p>
        <p className={`${textSize}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          odit quod obcaecati tenetur magnam voluptatibus perferendis dolore
          eaque cupiditate quo debitis impedit facere nisi velit id delectus
          minima, temporibus exercitationem.
        </p>
        <p className={`${textSize}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
          dolores. Libero, hic inventore aliquam at dignissimos nemo aspernatur
          sequi recusandae amet, ratione quia iste odit nesciunt tenetur
          doloribus nam magnam.
        </p>
        <p className={`${textSize}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          laborum quis earum totam necessitatibus neque delectus pariatur
          cupiditate aliquid. Ullam reiciendis fugiat voluptates suscipit itaque
          nobis recusandae id atque illum!
        </p>
        <Button
          linkButton={"https://www.doctoralia.com.br/z/oMriYf"}
          fontSize={textSize}
        >
          Agende um horário comigo!
        </Button>
      </div>
    </section>
  );
}
