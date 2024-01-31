"use client";
import { Slider } from "@lifarl/react-scroll-snap-slider";
import { useRef, useState } from "react";
import NavArrow from "../Carousel/NavArrow/NavArrow";
import VideoPresentation from "../VideoPresentation/VideoPresentation";
import { StarIcon } from "@heroicons/react/20/solid";
import { testimonialSectionConfig } from "@/src/config/testimonialSection";

export default function TestimonialSection() {
  const renderCustomArrow = ({ direction, ref, onClick }) => (
    <NavArrow
      ref={ref}
      direction={direction}
      onClick={() => onClick(direction)}
    />
  );

  const gallerySliderRef = useRef(null);
  const [slideIndex, setIndex] = useState(0);

  const changeGalleryIndex = (index) => {
    gallerySliderRef.current?.scrollToSlide(index);
    setIndex(index);
  };

  const onGallerySlidesVisibilityChange = (index) => {
    setIndex(index);
  };

  return (
    <>
      <section className="bg-gray-100 w-full flex flex-col lg:grid gap-4 md:gap-8 px-8 2xs:p-12 xs:p-20 py-24 md:px-28 lg:p-28 2xl:px-60 justify-center items-start">
        <div className="lg:max-w-xl lg:row-span-1 lg:col-span-1">
          <h2 className="text-3xl font-bold text-boni-blue-100 sm:text-5xl xl:text-6xl">
            O que nossos pacientes dizem
          </h2>
        </div>
        <div className="w-full lg:row-start-2 lg:col-start-1">
          <VideoPresentation url={testimonialSectionConfig.video_url} />
        </div>

        <div className="w-full lg:max-w-md xl:max-w-xl lg:row-start-2 lg:col-start-2 flex flex-col gap-4 relative xl:px-20">
          <Slider
            ref={gallerySliderRef}
            onSlidesVisibilityChange={onGallerySlidesVisibilityChange}
            renderCustomArrow={renderCustomArrow}
          >
            {testimonialSectionConfig.testimonials.map((item, index) => {
              return (
                <article
                  key={index}
                  className="bg-white w-full text-boni-blue-300 p-16 flex flex-col gap-6"
                >
                  <span className="flex">
                    <StarIcon className="h-5 w-5 fill-sky-600" />
                    <StarIcon className="h-5 w-5 fill-sky-600" />
                    <StarIcon className="h-5 w-5 fill-sky-600" />
                    <StarIcon className="h-5 w-5 fill-sky-600" />
                    <StarIcon className="h-5 w-5 fill-sky-600" />
                  </span>
                  <p className="text-wrap">{item.testimonial}</p>
                  <footer className="text-sm font-medium text-gray-700">
                    &mdash; {item.author}
                  </footer>
                </article>
              );
            })}
          </Slider>
          <div className="w-[75%] xs:w-[50%] list-none mx-auto text-center z-10">
            {testimonialSectionConfig.testimonials.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => changeGalleryIndex(index)}
                  className={`inline-block w-3 h-3 ${
                    slideIndex === index ? "bg-black" : "bg-[#b6b6b6]"
                  } cursor-pointer mx-2 rounded-xl transition-transform`}
                ></span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
