import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import DisclosureNavBar from "../Disclousure/DisclousureNavbar";
import { Dialog, Transition } from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  CursorArrowRippleIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import "animate.css";
import { navBarConfig } from "@/src/config";

export default function DialogNavbar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Transition.Root
      show={mobileMenuOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-80 blur-3xl transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen min-[480px]:max-w-sm bg-white min-[480px]:rounded-s-3xl px-8 py-8 overflow-y-scroll">
                  <div className="flex items-start justify-between">
                    <Link
                      href={navBarConfig.link}
                      className="-m-1.5 p-1.5"
                    >
                      <span className="sr-only">{navBarConfig.title}</span>
                      <Image
                        className="h-12 w-auto"
                        src={navBarConfig.Img_blue}
                        alt={navBarConfig.alt}
                        priority={true}
                      />
                    </Link>
                    <button
                      type="button"
                      className="-mx-2.5 -mt-1 rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Fechar menu de navegação</span>
                      <XMarkIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="divide-y divide-gray-500/10">
                      <div className="space-y-2 pt-6 pl-2 divide-y divide-gray-500/10 text-lg font-medium leading-10 text-boni-blue-200">
                        {navBarConfig.nav_items.map((nav_item, index) => {
                          return (
                            <Link
                              href={nav_item.url}
                              className="-mx-3 pt-2 block"
                              key={index}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex w-full items-center justify-between hover:bg-gray-50 mb-2 rounded-lg pl-3 pr-3.5">
                                {nav_item.title}{" "}
                                <ChevronRightIcon className="h-5 w-5" />
                              </div>
                            </Link>
                          );
                        })}
                        <DisclosureNavBar
                          setMobileMenuOpen={setMobileMenuOpen}
                        />
                      </div>
                      <div className="py-6 pl-2">
                        <Link
                          href={navBarConfig.button_link}
                          target="_blank"
                          className="rounded-full px-4 mx-1 py-2.5 text-base font-medium leading-7 bg-boni-blue-200 text-white shadow-sm hover:bg-boni-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-boni-blue-200 uppercase flex justify-center items-center animate__animated animate__pulse animate-[1s_ease-in-out_infinite] gap-x-1.5"
                        >
                          {navBarConfig.button_title}
                          <CursorArrowRippleIcon className="h-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
