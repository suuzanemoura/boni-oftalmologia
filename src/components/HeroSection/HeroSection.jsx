import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import VideoPresentation from "./VideoPresentation";
import { useContext } from "react";
import { FontContext } from "@/contexts/FontContext";
import Link from "next/link";

export default function HeroSection({ title, highlight, description }) {
  const { textSize } = useContext(FontContext);

  return (
    <section className="py-6 relative flex flex-col items-center pt-20 min-h-[38rem] xs:min-h-[44rem] sm:min-h-[50rem] md:min-h-[58rem] lg:min-h-[36rem] 3xl:min-h-[46rem] 4xl:min-h-[54rem]">
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
      <div className="absolute top-0 left-0 overflow-hidden leading-[0] w-full pb-24">
        <div className="grid items-center lg:grid-cols-2 px-6 pt-16 lg:px-44 xl:px-48 3xl:px-60 4xl:px-72 pb-20 text-center lg:text-left md:gap-12 gap-8 sm:gap-10">
          <div className="w-full flex flex-col items-center lg:items-start 3xl:max-w-2xl">
            <h1 className="m-0 text-4xl font-bold tracking-tight xs:text-5xl sm:text-6xl md:text-7xl lg:text-[2.5rem] xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
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
          <div className="mb-[-62px] px-3 md:mb-0 xs:px-10 md:px-20 lg:px-0">
            <VideoPresentation
              url={
                "https://www.youtube.com/embed/e16G3tpCq-M?si=fH5puVCZQn6UPNhd"
              }
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -z-[100]">
          <svg
            dataname="Wavy"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(266%+1.3px)] h-[18.5rem] md:w-[calc(267%+1.3px)] xs:h-[27.25rem] lg:w-[calc(148%+1.3px)] lg:h-[20rem] 3xl:h-[22.5rem] fill-white -z-50"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
    </section>
  );
}
