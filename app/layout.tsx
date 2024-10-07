import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { poppins_400 } from "./fonts/font";

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
      <body className="antialiased" style={poppins_400.style}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
