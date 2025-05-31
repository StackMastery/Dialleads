import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistFont = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dialleads",
  description: "Human-Like AI Phone Calls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="">
      <body
        data-new-gr-c-s-check-loaded="14.1237.0"
        data-gr-ext-installed=""
        className={`${geistFont.className}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
