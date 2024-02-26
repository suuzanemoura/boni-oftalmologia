"use client";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import VideoPresentation from "../VideoPresentation";
import { useFontContext } from "@/src/contexts/FontContext";
import Link from "next/link";
import { heroSectionConfig } from "@/src/config";

export default function HeroSection() {
  const { textSize } = useFontContext();

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
      <div className="pt-6 lg:pt-24 px-8 xs:px-12 sm:px-24 md:py-28 md:px-32 xl:px-48 2xl:px-60 w-full flex items-center justify-center">
        <div className="w-full max-w-[1056px] grid items-center lg:grid-cols-2 md:gap-12 gap-8 sm:gap-10 justify-center">
          <div className="w-full flex flex-col">
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight">
              {heroSectionConfig.title}
              <br className="hidden lg:block" />
              <span className="text-sky-400">
                {heroSectionConfig.highlight}
              </span>
            </h1>
            <p className={`${textSize} my-4 leading-6`}>
              {heroSectionConfig.description}
            </p>

            <button
              className="bg-sky-700 hover:bg-sky-600 px-8 py-4 rounded-full mt-2 shadow-lg active:bg-sky-500 cursor-pointer w-fit"
              type="button"
            >
              <Link
                href={heroSectionConfig.Button_idHash_link}
                className="transition duration-700 ease-in-out"
              >
                <p
                  className={`${textSize} flex gap-2 items-center justify-center font-semibold`}
                >
                  {heroSectionConfig.button}
                  <ArrowDownCircleIcon className="h-5 w-5" />
                </p>
              </Link>
            </button>
          </div>
          <div className="w-full">
            <VideoPresentation url={heroSectionConfig.video_url} />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden blur-3xl 2xs:top-[calc(100%-65rem)] sm:top-[calc(100%-60rem)] md:top-[calc(100%-70rem)] lg:top-[calc(100%-90rem)] 3xl:top-[calc(100%-80rem)]"
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
      <div className="w-full overflow-hidden leading-[0] -z-[100] mt-[-11rem] md:mt-[-20rem] lg:mt-[-13rem]">
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
