import { siteConfig } from "../config/site";
import { Providers } from "../providers/providers";
import "./globals.css";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

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
  title: `${siteConfig.title}`,
  description: `${siteConfig.description}`,
  keywords: `${siteConfig.keywords}`,
  metadataBase: new URL(`${siteConfig.url}`),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}${siteConfig.img}`,
    title: `${siteConfig.title}`,
    description: `${siteConfig.description}`,
    siteName: `${siteConfig.title}`,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.img}`,
      },
    ],
    locale: "pt_BR",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title}`,
    description: `${siteConfig.description}`,
    images: [`${siteConfig.url}${siteConfig.img}`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${sourceSans.variable} ${sourceSerif.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
