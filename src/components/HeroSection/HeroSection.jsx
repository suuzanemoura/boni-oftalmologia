import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import VideoPresentation from "./VideoPresentation";
import { useContext } from "react";
import { FontContext } from "@/contexts/FontContext";

export default function HeroSection({ title, highlight, description }) {
  const { textSize } = useContext(FontContext);

  return (
    <section className="py-6 relative flex flex-col items-center pt-20 min-h-[36rem] 3xl:min-h-[54rem]">
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
        <div className="grid items-center gap-12 lg:grid-cols-2 px-6 pt-16 md:px-44 pb-20 text-center lg:text-left">
          <div>
            <h1 className="m-0 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl 3xl:text-8xl">
              {title}
              <br />
              <span className="text-sky-400">{highlight}</span>
            </h1>
            <p className={`${textSize} my-4 leading-6 max-w-md 3xl:max-w-2xl`}>
              {description}
            </p>
            <button className="bg-sky-700 px-8 py-4 rounded-full mt-2 shadow-lg">
              <p
                className={`${textSize} flex gap-2 items-center justify-center font-semibold`}
              >
                Saiba mais
                <ArrowDownCircleIcon className="h-5 w-5" />
              </p>
            </button>
          </div>
          <div className="mb-12 lg:mb-0">
            <VideoPresentation
              url={
                "https://www.youtube.com/embed/e16G3tpCq-M?si=fH5puVCZQn6UPNhd"
              }
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            dataname="Wavy"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(266%+1.3px)] h-[14.8125rem] md:w-[calc(267%+1.3px)] md:h-[27.25rem] xl:w-[calc(148%+1.3px)] xl:h-[20rem] 3xl:h-[22.5rem] fill-white -z-50"
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
