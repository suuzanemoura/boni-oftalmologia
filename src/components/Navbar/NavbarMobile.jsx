import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/image_logo_drpedroboni.png";
import PopoverFontSize from "../Popover/PopoverFontSize";

export default function NavbarMobile({ setMobileMenuOpen }) {
  return (
    <nav
      className="flex lg:hidden items-start lg:items-center justify-between p-8 lg:py-10 md:px-14 lg:px-16 xl:px-20"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link
          href="/"
          className="-m-1.5 p-1.5 mr-6"
        >
          <span className="sr-only">Dr. Pedro Boni</span>
          <Image
            className="h-8 2xs:h-10 xs:h-12 w-auto object-contain"
            src={logo}
            alt="Logo do Dr. Pedro Boni"
            priority={true}
          />
        </Link>
      </div>
      <div className="flex lg:hidden mt-1.5 gap-2">
        <PopoverFontSize position={"-right-12"} />
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            className="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
