import type { Metadata } from "next";

import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "FitControl",
  description: "Tu app para controlar tu progreso en el gimnasio y mantenerte motivado",
manifest: '/manifest.json',
  themeColor: '#057386',    

metadataBase: new URL('https://fitcontrol-guinder.vercel.app'), 
  
  // Configuración de Favicons e Iconos
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: 'any' },
      { url: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Configuración de Open Graph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: 'FitControl - Tu Gestor de Rutinas',
    description: 'Tu app para controlar tu progreso en el gimnasio y mantenerte motivado.',
    url: 'https://fitcontrol-guinder.vercel.app',
    siteName: 'FitControl',
    images: [
      {
        url: '/og-image.png', // Debe medir 1200x630
        width: 1200,
        height: 630,
        alt: 'Vista previa de FitControl',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },

  // Configuración para Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'FitControl - Tu Gestor de Rutinas',
    description: 'Tu app para controlar tu progreso en el gimnasio y mantenerte motivado.',
    images: ['/og-image.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className="app-container">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
