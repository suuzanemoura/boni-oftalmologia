import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Service01 from "@/public/images/image_catarata.jpg";
import Service02 from "@/public/images/image_glaucoma.jpg";
import Service03 from "@/public/images/image_cirurgia_refrativa.jpg";
import Service04 from "@/public/images/image_ceratocone.jpg";
import Service05 from "@/public/images/image_plastica_ocular.png";

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

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Experiência em:
      </h2>
      <div className="relative overflow-hidden max-w-[256px] md:max-w-[525px] lg:max-w-[790px] xl:max-w-[1060px]">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-sky-600/50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 hover:rounded-l-xl"
            disabled={isDisabled("prev")}
          >
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white m-1.5 w-7"
            >
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-sky-600/50 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 hover:rounded-r-xl"
            disabled={isDisabled("next")}
          >
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white m-1.5 w-7"
            >
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-3 overflow-x-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center w-[336px] h-[336px] snap-start"
              >
                <div className="h-64 w-64 aspect-square">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    width={500}
                    height={500}
                    className="w-full h-full aspect-square object-cover rounded-t-xl"
                  />
                  <h3 className="py-6 px-3 mx-auto text-2xl bg-sky-600 text-white rounded-b-xl uppercase font-bold">
                    {resource.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
