import type { Metadata } from "next";
import "./globals.css";
import Footer from "@components/Footer";
import { abrilFatface, poppins } from "./fonts/font";

export const metadata: Metadata = {
  title: "Rent Ease",
  description: "Book the flat and rooms for rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${abrilFatface.variable} ${poppins.variable} font-sans vsc-initialized `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
