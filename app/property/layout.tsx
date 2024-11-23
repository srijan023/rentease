import NavBar from "../components/NavBar";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main className="font-body max-w-[1200px] mx-auto">{children}</main>
    </div>
  );
}
