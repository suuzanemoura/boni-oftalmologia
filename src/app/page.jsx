"use client";

import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroSection from "@/src/components/HeroSection/HeroSection";
import ServicesSection from "@/src/components/ServiceSection/ServicesSection";
import { FontContext } from "@/src/contexts/FontContext";
import { useContext } from "react";

export default function Home() {
  const { textSize } = useContext(FontContext);

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={"Vamos preservar"}
          highlight={" a sua visão?"}
          description={
            "Sou oftalmologista, especialista em Catarata, Glaucoma e Córnea, em melhorar sua visão e melhorar sua saúde ocular!"
          }
        />

        <ServicesSection />

        <section>
          <div className={`flex flex-col gap-6 p-12 xs:p-16 sm:p-24`}>
            <p className={`${textSize}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pretium eleifend mauris a rhoncus. Pellentesque posuere semper
              neque eu lacinia. Praesent iaculis sit amet odio quis
              sollicitudin. Nunc mollis placerat lacus. Curabitur tellus velit,
              auctor eu ligula eget, sollicitudin accumsan velit. Sed
              ullamcorper nisl tempus ligula egestas, vitae suscipit nisl
              vulputate. Sed sed metus libero. Quisque id dui sed dui commodo
              consequat non eu enim.
            </p>

            <p className={`${textSize}`}>
              Donec ac felis finibus, hendrerit lorem ac, suscipit turpis. Sed a
              ex metus. Nam convallis imperdiet posuere. Nulla felis tellus,
              laoreet non blandit a, euismod vitae nunc. Cras porttitor lacus
              vel lacus varius ornare. Proin libero dui, tempor eget dui eget,
              blandit viverra libero. Pellentesque elit tortor, porttitor id
              auctor at, molestie laoreet libero. Vestibulum et eros eget metus
              semper sollicitudin. Donec lobortis dictum quam, mattis dapibus
              arcu blandit eu. Nunc egestas rhoncus augue, in ultrices dolor
              laoreet vel. Donec vel augue consequat, blandit quam id, faucibus
              lectus. Duis sollicitudin non mi eu feugiat.
            </p>

            <p className={`${textSize}`}>
              Nam eget diam eget mi mollis posuere sed eget urna. Vivamus
              facilisis metus porta, euismod mauris eget, facilisis tellus.
              Suspendisse massa ante, vehicula a justo id, tristique
              pellentesque libero. Aliquam vitae felis ac lectus sollicitudin
              pellentesque sed at mi. Phasellus non nunc quis massa venenatis
              semper faucibus tempus turpis. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Phasellus
              id cursus lacus, id porttitor erat. Aliquam purus ipsum,
              scelerisque vitae nibh et, volutpat tristique lacus. Curabitur
              ultricies nisl porttitor dictum dapibus.
            </p>

            <p className={`${textSize}`}>
              Cras non sapien tempus, vulputate nulla ac, consequat velit.
              Integer facilisis nunc nisi, sit amet malesuada augue sagittis in.
              Donec sodales neque at sapien consequat convallis. In ante augue,
              tempor eget sapien non, ullamcorper sagittis massa. Praesent
              posuere nunc sit amet est tincidunt imperdiet. Donec eu tortor
              mauris. Integer ullamcorper id erat id pretium. Nam luctus leo at
              nunc lobortis pretium. Maecenas finibus eros in semper consequat.
              Aliquam maximus elit non orci hendrerit, vitae gravida ex blandit.
              Vivamus ornare mi ut auctor lacinia. Aliquam commodo nisl eu quam
              vulputate, ac tristique purus scelerisque. Etiam suscipit lectus
              id aliquam aliquet.
            </p>

            <p className={`${textSize}`}>
              Quisque ac libero nisl. In hac habitasse platea dictumst. Etiam
              sollicitudin mollis tortor eu iaculis. Praesent lacinia rhoncus
              tincidunt. Sed id dui non justo tincidunt maximus sit amet at
              magna. Curabitur vel eleifend felis. Aenean eu nibh ultrices,
              vulputate nulla ut, condimentum libero. Aenean in semper sapien,
              ut blandit justo.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
