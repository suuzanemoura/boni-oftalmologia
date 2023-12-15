import { Popover } from "@headlessui/react";
import Link from "next/link";
import PopoverFontSize from "./PopoverFontSize";

export default function PopoverNavBar() {
  return (
    <Popover.Group className="hidden lg:flex md:gap-x-4 xl:gap-x-8 xl:text-lg text-base leading-6">
      <Link href="/">Início</Link>
      <Link href="/#sobre">Sobre</Link>
      <Link href="/#serviços">Serviços</Link>
      <Link href="/#clinica">A Clínica</Link>
      <Link href="#depoimentos">Depoimentos</Link>
      <Link href="#contatos">Contatos</Link>
      <PopoverFontSize position={"-left-20"} />
    </Popover.Group>
  );
}
