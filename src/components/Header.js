"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import {
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "../../public/images/image_logo_drpedroboni.png";

import PopoverNavBar from "./PopoverNavBar";
import DialogNavBar from "./DialogNavBar";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="flex items-start lg:items-center justify-between p-8 lg:py-10 md:px-14 lg:px-16"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 mr-6"
          >
            <span className="sr-only">Dr. Pedro Boni</span>
            <Image
              className="h-12 w-auto object-contain"
              src={logo}
              alt="Logo do Dr. Pedro Boni"
              priority={true}
            />
          </Link>
        </div>
        <div className="flex lg:hidden mt-1.5">
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
        <PopoverNavBar
          products={products}
          callsToAction={callsToAction}
        />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://www.doctoralia.com.br/z/oMriYf"
            target="_blank"
            className="rounded-full px-6 mx-1 py-2.5 text-sm font-extrabold leading-6 bg-white text-boni-blue-200 shadow-sm hover:text-boni-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-boni-blue-200 uppercase flex justify-center items-center animate__animated animate__pulse animate-[1s_ease-in-out_infinite] gap-x-1.5 ml-6 lg:ml-12 xl:ml-16 md:text-xs xl:text-sm w-fit"
          >
            Agende sua consulta!
            <CursorArrowRaysIcon className="h-6 md:h-10 lg:h-8 xl:h-6" />
          </Link>
        </div>
      </nav>
      <DialogNavBar
        products={products}
        callsToAction={callsToAction}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
