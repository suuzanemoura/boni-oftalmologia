import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Dr. Pedro Boni | Oftalmologista",
  description:
    "Oftalmologista, especialista em Catarata, Glaucoma e Córnea. Te ajudo a preservar a visão!",
  keywords: [
    "oftalmologista, catarata, glaucoma, córnea, visão, oftalmologista cirurgião, médico oftalmo, problemas de visão",
  ],
  openGraph: {
    title: "Dr. Pedro Boni | Oftalmologista",
    description:
      "Oftalmologista, especialista em Catarata, Glaucoma e Córnea. Te ajudo a preservar a visão!",
    siteName: "Dr. Pedro Boni | Oftalmologista",
    images: "/image_drpedroboni.svg",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${sourceSans.variable} ${sourceSerif.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
