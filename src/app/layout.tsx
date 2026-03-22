import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Source_Sans_3, Playfair_Display, Bebas_Neue } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans", subsets: ["latin"],
  weight: ["300", "400", "600", "700"], display: "swap",
});
const playfair = Playfair_Display({
  variable: "--font-playfair-display", subsets: ["latin"],
  weight: ["400", "700"], style: ["normal", "italic"], display: "swap",
});
const bebas = Bebas_Neue({
  variable: "--font-bebas-neue", subsets: ["latin"],
  weight: "400", display: "swap",
});

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, themeColor: "#0a0a0f", colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://javiermilei.com"),
  title: { default: "Javier Milei — Presidente de la Nación Argentina", template: "%s | Javier Milei" },
  description: "La libertad avanza. Visión, logros, reformas y el futuro de Argentina.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Javier Milei — Presidente de la Nación Argentina",
    description: "La libertad avanza. Visión, logros, reformas y el futuro de Argentina.",
    type: "website", locale: "es_AR",
    siteName: "Javier Milei — Presidente de la Nación Argentina",
    images: [{ url: "/images/banco/hero-balcon.jpg", width: 1200, height: 630, alt: "Presidente Javier Milei" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sourceSans.variable} ${playfair.variable} ${bebas.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <Nav />
        <Suspense>
          <main id="main-content">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
