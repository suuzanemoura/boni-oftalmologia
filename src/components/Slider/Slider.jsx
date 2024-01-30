"use client";

import { useState, useRef, useEffect, useContext } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { FontContext } from "@/src/contexts/FontContext";
import { servicesSectionConfig } from "@/src/config";

export default function Slider() {
  const items = servicesSectionConfig.slider_items;
  const duration = 5000;
  const itemsRef = useRef(null);
  const frame = useRef(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const { textSize } = useContext(FontContext);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const animate = (now) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="max-w-max mx-auto text-center flex flex-col lg:flex-row items-center gap-12 lg:px-8 xl:px-36 py-8">
      <div className="transition-all duration-150 delay-300 ease-in-out lg:min-w-max">
        <div
          className="relative flex flex-col"
          ref={itemsRef}
        >
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Image
                className="rounded-xl"
                src={item.img}
                width={375}
                height={500}
                alt={item.alt}
                loading="lazy"
              />
            </Transition>
          ))}
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto flex flex-col lg:gap-3">
        {items.map((item, index) => (
          <button
            key={index}
            className={`p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group ${
              active === index
                ? `order-1 ${
                    index === 0
                      ? "lg:order-1"
                      : index === 1
                      ? "lg:order-2"
                      : index === 2
                      ? "lg:order-3"
                      : index === 3
                      ? "lg:order-4"
                      : ""
                  }`
                : `order-last ${
                    index === 0
                      ? "lg:order-1"
                      : index === 1
                      ? "lg:order-2"
                      : index === 2
                      ? "lg:order-3"
                      : index === 3
                      ? "lg:order-4"
                      : ""
                  }`
            }`}
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`flex flex-col ${
                active === index
                  ? ""
                  : "hidden lg:block lg:opacity-50 lg:group-hover:opacity-100 lg:group-focus:opacity-100 lg:transition-opacity"
              }`}
            >
              <span className="block text-left font-medium text-slate-900 mb-2">
                <h3
                  className={`text-xl font-bold text-boni-blue-200 ${
                    active === index ? "text-2xl" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`${textSize}`}>{item.description}</p>
              </span>
              <span
                className="block relative w-full bg-slate-200 h-0.5 rounded-full mt-5"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 bg-sky-600 rounded-[inherit]"
                  style={{ width: active === index ? `${progress}%` : "0%" }}
                ></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
