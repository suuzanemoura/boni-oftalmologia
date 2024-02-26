import { Popover } from "@headlessui/react";
import Link from "next/link";
import PopoverFontSize from "../PopoverFontSize";
import { navBarConfig } from "@/src/config";

export default function PopoverNavBar() {
  return (
    <Popover.Group className="hidden lg:flex md:gap-x-4 xl:gap-x-8 xl:text-lg 3xl:text-2xl text-base leading-6">
      {navBarConfig.nav_items.map((nav_item, index) => {
        return (
          <Link
            key={index}
            href={nav_item.url}
            className="hover:underline-offset-8 hover:underline decoration-sky-600"
          >
            {nav_item.title}
          </Link>
        );
      })}
      <PopoverFontSize position={"-left-20"} />
    </Popover.Group>
  );
}
