import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import PopoverNavBar from "../Popover/PopoverNavBar";
import logo from "@/public/images/image_logo_drpedroboni.png";
import Button from "../Button/Button";

export default function Navbar() {
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
      <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-6 lg:ml-12 xl:ml-16 animate__animated animate__pulse animate-[1s_ease-in-out_infinite]">
        <Button
          linkButton={"https://www.doctoralia.com.br/z/oMriYf"}
          fontSize={"md:text-sm 2xl:text-base 3xl:text-xl"}
        >
          Agende sua consulta!
          <CursorArrowRippleIcon className="h-6 md:h-7 xl:6" />
        </Button>
      </div>
    </nav>
  );
}
