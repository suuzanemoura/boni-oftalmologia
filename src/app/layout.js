import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
