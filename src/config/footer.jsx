import Logo from "@/public/images/image_logo_olho_azul.png";
import Doctoralia from "@/public/images/doctoralia.png";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

export const footerConfig = {
  title: "Dr. Pedro Boni",
  link: "/",
  img: Logo,
  alt: "Logo do Dr. Pedro Boni",
  doctoralia_img: Doctoralia,
  doctoralia_img_alt: "Imagem do perfil do Doctoralia",
  doctoralia_url:
    "https://www.doctoralia.com.br/pedro-boni-goncalves/oftalmologista/rio-de-janeiro?utm_campaign=129107&utm_medium=link&utm_source=widget&utm_term=instagram-profile-link",
  copyright_name: "Dr. Pedro Boni - Oftalmologista.",
  socialmedia_links: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/drpedroboni/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-5 w-auto"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@dr.pedroboni5584",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="fill-gray-500 hover:fill-sky-600 h-5 w-auto"
        >
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
      ),
    },
  ],
  contatos: {
    id: "contatos",
    title: "Onde me encontrar",
    links: [
      {
        link: "tel:(21)34001280",
        description: "(21) 3400-1280",
        icon: <PhoneIcon className="h-5 w-5 text-boni-blue-200" />,
      },
      {
        link: "https://api.whatsapp.com/send/?phone=5521999132833&text=Ol%C3%A1%21+Vim+do+site+do+Dr.+Pedro+Boni+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0",
        description: "(21) 99913-2833",
        icon: <DevicePhoneMobileIcon className="h-5 w-5 text-boni-blue-200" />,
      },
      {
        link: "mailto:contato@drpedroboni.com.br",
        description: "contato@drpedroboni.com.br",
        icon: <EnvelopeIcon className="h-5 w-5 text-boni-blue-200" />,
      },
      {
        link: "https://maps.app.goo.gl/urKgbzaHYhnD8xUy8",
        description: (
          <>
            Rua Agostinho Coelho 99, sala 410 - Campo Grande
            <br />
            Rio de Janeiro / RJ
          </>
        ),
        icon: <MapPinIcon className="h-5 w-5 text-boni-blue-200" />,
      },
    ],
  },
};
