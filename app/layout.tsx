import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";

const spaceGrotesk = Space_Grotesk({
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
      <body className={`${spaceGrotesk.className}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
