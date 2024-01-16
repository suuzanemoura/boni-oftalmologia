import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { FontContextProvider } from "@/src/contexts/FontContext";

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
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
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
    images: "/images/image_drpedroboni.jpg",
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
        <FontContextProvider>{children}</FontContextProvider>
      </body>
    </html>
  );
}
