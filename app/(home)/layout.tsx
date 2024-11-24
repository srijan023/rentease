import type { Metadata } from "next";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Rent Ease",
  description: "Book the flat and rooms for rent",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavBar />
      <main className="mt-36 max-w-[1200px] mx-auto font-body">
        {" "}
        {children}{" "}
      </main>
    </div>
  );
}
