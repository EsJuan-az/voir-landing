import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voir | Colección Illuminare — La luz en cada fase del día",
  description:
    "Illuminare es el inicio. Una colección que revela la esencia de la luz en sus distintos momentos. Descubre las gorras de Voir: piezas nacidas del amanecer, el cenit y el crepúsculo. Viste el ciclo, sé parte de la luz.",
  keywords: [
    "voir",
    "illuminare",
    "moda",
    "gorras",
    "caps",
    "cap",
    "streetwear",
  ],
  openGraph: {
    title: "Voir | Colección Illuminare",
    description:
      "Desde el alba hasta la noche: Illuminare, la colección que viste cada fase del día. Conoce nuestras gorras.",
    url: "https://voirstore.com",
    siteName: "Voir",
    images: [
      {
        url: "https://voirstore.com/images/og-image.jpg", // Reemplaza con tu imagen
        width: 1200,
        height: 630,
        alt: "Colección Illuminare de Voir",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voir | Colección Illuminare",
    description:
      "La luz cambia, evoluciona, inspira. Conoce Illuminare de Voir, una colección nacida de las fases del día.",
    images: ["https://voirstore.com/images/og-image.jpg"], // Reemplaza con tu imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
      </head>
      <body
        translate="no"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
