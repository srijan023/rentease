import NavBar from "../components/NavBar";

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main className="bg-background font-body ">
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
