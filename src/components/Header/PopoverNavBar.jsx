import { Popover } from "@headlessui/react";
import Link from "next/link";
import PopoverFontSize from "./PopoverFontSize";

export default function PopoverNavBar() {
  return (
    <Popover.Group className="hidden lg:flex md:gap-x-4 xl:gap-x-8 xl:text-lg text-base leading-6">
      <Link
        href="/"
        className="hover:underline-offset-8 hover:underline decoration-sky-600"
      >
        Início
      </Link>
      <Link
        href="/#sobre"
        className="hover:underline-offset-8 hover:underline decoration-sky-600"
      >
        Sobre
      </Link>
      <Link
        href="/#serviços"
        className="hover:underline-offset-8 hover:underline decoration-sky-600"
      >
        Serviços
      </Link>
      <Link
        href="/#clinica"
        className="hover:underline-offset-8 hover:underline decoration-sky-600"
      >
        A Clínica
      </Link>
      <Link
        href="#depoimentos"
        className="hover:underline-offset-8 hover:underline decoration-sky-600"
      >
        Depoimentos
      </Link>
      <Link
        href="#contatos"
        className="hover:underline-offset-8 hover:underline decoration-sky-600"
      >
        Contatos
      </Link>
      <PopoverFontSize position={"-left-20"} />
    </Popover.Group>
  );
}
