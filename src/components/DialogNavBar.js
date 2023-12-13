import { Dialog, Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/20/solid";
import logo_azul from "../../public/images/image_logo_drpedroboni_azul.png";
import "animate.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DialogNavBar({
  products,
  callsToAction,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-start justify-between">
          <Link
            href="#"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Dr. Pedro Boni</span>
            <Image
              className="h-12 w-auto"
              src={logo_azul}
              alt="Logo Dr. Pedro Boni"
              priority={true}
            />
          </Link>
          <button
            type="button"
            className="-mx-2.5 -mt-1 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6 pl-2">
              <Link
                href="/"
                className="text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50"
              >
                Início
              </Link>
              <Link
                href="#sobre"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50"
              >
                Sobre
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50"
              >
                Serviços
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50"
              >
                A Clínica
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50"
              >
                Depoimentos
              </Link>
              <Disclosure
                as="div"
                className="-mx-3"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50">
                      Contatos
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none",
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-boni-blue-100 hover:bg-gray-50"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="py-6 pl-2">
              <Link
                href="https://www.doctoralia.com.br/z/oMriYf"
                target="_blank"
                className="rounded-full px-4 mx-1 py-2.5 text-base font-medium leading-7 bg-boni-blue-200 text-white shadow-sm hover:bg-boni-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-boni-blue-200 uppercase flex justify-center items-center animate__animated animate__pulse animate-[1s_ease-in-out_infinite] gap-x-1.5"
              >
                Agende sua consulta!{" "}
                <CursorArrowRaysIcon className="h-6 md:h-10 lg:h-8 xl:h-6" />
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
