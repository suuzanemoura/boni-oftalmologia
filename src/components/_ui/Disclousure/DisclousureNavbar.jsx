import { FontContext } from "@/contexts/FontContext";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DisclosureNavbar({ setMobileMenuOpen }) {
  const { setTextSize, sizesVariation } = useContext(FontContext);

  return (
    <Disclosure
      as="div"
      className="-mx-3 py-2"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg pl-3 py-2.5 pr-3.5 text-base font-medium leading-7 text-boni-blue-200 hover:bg-gray-50">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="fill-current"
              >
                <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 fill-current"
              >
                <path d="M9 6a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 6z" />
                <path
                  fillRule="evenodd"
                  d="M2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9zm7-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none",
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...sizesVariation].map((item) => (
              <Disclosure.Button
                key={item.name}
                as="div"
                className="flex gap-2 items-center rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-boni-blue-100 hover:bg-gray-50"
                onClick={() => {
                  setTextSize(item.fontSize), setMobileMenuOpen(false);
                }}
              >
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
                <p>{item.name}</p>
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
