import Image from "next/image";
import Link from "next/link";
import { footerConfig } from "@/src/config";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-8 pb-0 lg:py-8">
        <div className="lg:flex lg:justify-between">
          <div className="mb-6 lg:mb-0 pt-4 pr-4 lg:pr-10 min-w-fit flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:block">
              <Link
                href={footerConfig.link}
                className="flex items-center gap-3"
              >
                <Image
                  src={footerConfig.img}
                  className="h-8 w-8 object-contain"
                  alt={footerConfig.alt}
                />
                <h2 className="font-title uppercase text-xl 2xs:text-2xl font-semibold text-boni-blue-100">
                  {footerConfig.title}
                </h2>
              </Link>
            </div>

            <div className="flex mt-2 lg:ml-11 gap-2">
              {footerConfig.socialmedia_links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="fill-gray-500 hover:fill-sky-600"
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 lg:hidden" />
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
            <div>
              <Link
                href={footerConfig.doctoralia_url}
                target="_blank"
              >
                <Image
                  src={footerConfig.doctoralia_img}
                  alt={footerConfig.doctoralia_img_alt}
                />
              </Link>
            </div>

            <div id={footerConfig.contatos.id}>
              <h2 className="pt-3 lg:pt-4 mb-2 text-sm 2xs:text-md font-bold text-boni-blue-200 uppercase">
                {footerConfig.contatos.title}
              </h2>
              <ul className="text-gray-500 text-sm lg:text-base font-medium flex flex-col gap-2">
                {footerConfig.contatos.links.map((contato, index) => {
                  return (
                    <Link
                      href={contato.link}
                      className="hover:underline"
                      target="_blank"
                      key={index}
                    >
                      <li className="flex gap-1.5">
                        {contato.icon}
                        {contato.description}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <p className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()} {footerConfig.copyright_name}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
