import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import VideoPresentation from "../VideoPresentation/VideoPresentation";

import { FontContext } from "@/src/contexts/FontContext";
import { useContext } from "react";
import Link from "next/link";

export default function HeroSection({ title, highlight, description }) {
  const { textSize } = useContext(FontContext);

  return (
    <section className="flex flex-col items-center w-full">
      <div
        className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5faef8] to-[#4b44ad] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="pt-6 lg:pt-24 grid items-center lg:grid-cols-2 px-8 lg:px-32 xl:px-48 3xl:px-60 4xl:px-72 text-center lg:text-left md:gap-12 gap-8 sm:gap-10 w-full">
        <div className="w-full flex flex-col items-center lg:items-start 3xl:max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight 2xs:text-5xl sm:text-6xl md:text-7xl lg:text-[2.5rem] xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
            {title}
            <br />
            <span className="text-sky-400">{highlight}</span>
          </h1>
          <p
            className={`${textSize} my-4 leading-6 max-w-md 2xs:max-w-xs sm:max-w-md lg:max-w-xs xl:max-w-md 2xl:max-w-lg 3xl:max-w-2xl`}
          >
            {description}
          </p>

          <button
            className="bg-sky-700 hover:bg-sky-600 px-8 py-4 rounded-full mt-2 shadow-lg active:bg-sky-500 cursor-pointer"
            type="button"
          >
            <Link href="#">
              <p
                className={`${textSize} flex gap-2 items-center justify-center font-semibold`}
              >
                Saiba mais
                <ArrowDownCircleIcon className="h-5 w-5" />
              </p>
            </Link>
          </button>
        </div>
        <div className="px-3 md:mb-0 xs:px-10 md:px-20 lg:px-0">
          <VideoPresentation
            url={
              "https://www.youtube.com/embed/e16G3tpCq-M?si=fH5puVCZQn6UPNhd"
            }
            title={"Dr. Pedro Boni | Oftalmologista"}
          />
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)] 3xl:top-[calc(100%-65rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  from-[#5faef8] to-[#4b44ad] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="w-full overflow-hidden leading-[0] -z-[100] mt-[-11rem] 2xs:mt-[-15rem] lg:mt-[-5rem]">
        <svg
          dataname="Wavy"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(275%+1.3px)] h-[14rem] 2xs:h-[18rem] md:w-[calc(267%+1.3px)] md:h-[20rem]  lg:w-[calc(138%+1.3px)] lg:h-[16rem] 3xl:h-[22.5rem] fill-white -z-50"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
