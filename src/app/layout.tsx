import type { Metadata } from "next";

import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "FitControl",
  description: "Tu app para controlar tu progreso en el gimnasio y mantenerte motivado",
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
