import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import PopoverFontSize from "../../Popover/PopoverFontSize";
import { navBarConfig } from "@/src/config";

export default function NavbarMobile({ setMobileMenuOpen }) {
  return (
    <nav
      className="flex lg:hidden items-start lg:items-center justify-between p-8 lg:py-10 xs:px-12 sm:px-24 md:px-32"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link
          href={navBarConfig.link}
          className="-m-1.5 p-1.5 mr-6"
        >
          <span className="sr-only">{navBarConfig.button_title}</span>
          <Image
            className="h-8 2xs:h-10 xs:h-12 w-auto object-contain"
            src={navBarConfig.img}
            alt={navBarConfig.alt}
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
          <span className="sr-only">Abrir menu de navegação</span>
          <Bars3Icon
            className="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
