import type { Metadata } from "next";
import "./globals.css";

import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "NUSANTARA Logistik | Solusi Logistik",
    template: "%s | NUSANTARA Logistik",
  },
  description:
    "nusantara express indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Topbar />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};