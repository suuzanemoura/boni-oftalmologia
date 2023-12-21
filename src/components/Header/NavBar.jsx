import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import PopoverNavBar from "./PopoverNavBar";
import logo from "../../../public/images/image_logo_drpedroboni.png";

export default function NavBar() {
  return (
    <nav
      className="hidden lg:flex items-start lg:items-center justify-between p-8 lg:py-10 md:px-14 lg:px-16 xl:px-20"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link
          href="#"
          className="-m-1.5 p-1.5 mr-6"
        >
          <span className="sr-only">Dr. Pedro Boni</span>
          <Image
            className="h-12 w-auto object-contain 3xl:h-20"
            src={logo}
            alt="Logo do Dr. Pedro Boni"
            priority={true}
          />
        </Link>
      </div>
      <PopoverNavBar />
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          href="https://www.doctoralia.com.br/z/oMriYf"
          target="_blank"
          className="rounded-full px-6 mx-1 py-2.5 font-bold leading-6 bg-white text-boni-blue-200 shadow-sm hover:bg-boni-blue-100 hover:text-white active:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-boni-blue-200 uppercase flex justify-center items-center animate__animated animate__pulse animate-[1s_ease-in-out_infinite] gap-x-1.5 ml-6 lg:ml-12 xl:ml-16 md:text-sm 2xl:text-base w-fit 3xl:text-xl"
        >
          Agende sua consulta!
          <CursorArrowRippleIcon className="h-6 md:h-7 xl:6" />
        </Link>
      </div>
    </nav>
  );
}
