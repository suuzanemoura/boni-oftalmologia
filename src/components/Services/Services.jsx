import { useState, useRef, useEffect } from "react";
import Service01 from "@/public/images/image_catarata.jpg";
import Service02 from "@/public/images/image_glaucoma.jpg";
import Service03 from "@/public/images/image_cirurgia_refrativa.jpg";
import Service04 from "@/public/images/image_ceratocone.jpg";
import Service05 from "@/public/images/image_plastica_ocular.png";
import ServiceCard from "./ServiceCard";
import { Slider } from "@lifarl/react-scroll-snap-slider";
import NavArrow from "./NavArrow";

export default function Services() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const data = {
    resources: [
      {
        title: "Catarata",
        imageUrl: Service01,
      },
      {
        title: "Glaucoma",
        imageUrl: Service02,
      },
      {
        title: "Cirurgia Refrativa",
        imageUrl: Service03,
      },
      {
        title: "Ceratocone",
        imageUrl: Service04,
      },
      {
        title: "Plástica Ocular",
        imageUrl: Service05,
      },
    ],
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const renderCustomArrow = ({ direction, ref, onClick }) => (
    <NavArrow
      ref={ref}
      direction={direction}
      onClick={() => onClick(direction)}
    />
  );

  return (
    <div className="mt-12 mb-6 mx-auto">
      <h2 className="text-3xl 2xs:text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Experiência em:
      </h2>
      <div className="relative overflow-hidden max-w-[224px] 3xs:max-w-[256px] xs:max-w-[400px] md:max-w-[655px] lg:max-w-[790px] xl:max-w-[1055px]">
        <Slider
          renderCustomArrow={renderCustomArrow}
          slideWidth={256}
        >
          {data.resources.map((resource, index) => {
            return (
              <ServiceCard
                key={index}
                resource={resource}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
