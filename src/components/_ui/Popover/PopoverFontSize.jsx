import { FontContext } from "@/contexts/FontContext";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useContext } from "react";

export default function PopoverFontSize({ position }) {
  const { setTextSize, sizesVariation } = useContext(FontContext);
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className={"w-4 h-4 2xs:w-5 2xs:h-5 3xl:w-6 3xl:h-6 fill-current"}
        >
          <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={"w-4 h-4 2xs:w-5 2xs:h-5 3xl:w-6 3xl:h-6  fill-current"}
        >
          <path d="M9 6a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 6z" />
          <path
            fillRule="evenodd"
            d="M2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9zm7-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
            clipRule="evenodd"
          />
        </svg>

        <ChevronDownIcon
          className="h-5 w-5 3xl:w-6 3xl:h-6  flex-none text-gray-300"
          aria-hidden="true"
        />
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-10" />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={`absolute ${position} top-full z-10 mt-3 w-screen sm:max-w-[300px] max-w-[230px] overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5`}
        >
          <div className="p-2 sm:p-4">
            {sizesVariation.map((item) => (
              <Popover.Button
                key={item.name}
                onClick={() => setTextSize(item.fontSize)}
                className={"w-full text-left"}
              >
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      className={`${item.iconSize} text-gray-600 group-hover:text-indigo-600`}
                      aria-hidden="true"
                    >
                      <path d="m159-280 150-400h72l150 400h-69l-36-102H264l-36 102h-69Zm126-160h120l-58-166h-4l-58 166Zm369 171q-49 0-77-25.5T549-364q0-42 32.5-68.5T665-459q23 0 42.5 3.5T741-444v-14q0-27-18.5-43T672-517q-21 0-39.5 9T601-482l-43-32q19-27 48-41t67-14q62 0 95 29.5t33 85.5v176h-59v-34h-3q-13 20-35 31.5T654-269Zm10-50q32 0 54.5-22.5T741-396q-14-8-32-12t-33-4q-32 0-49 12.5T610-364q0 20 15 32.5t39 12.5Z" />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <p
                      className={`block font-medium ${item.fontSize} text-gray-900`}
                    >
                      {item.name}
                    </p>
                    <span className="absolute inset-0" />
                    <p className={`mt-1 ${item.fontSize} text-gray-600`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Popover.Button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
