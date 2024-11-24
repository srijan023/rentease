import NavBar from "@components/NavBar";

export default function TenantLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-body w-full bg-background">
      <NavBar />
      <main className="font-body max-w-[1200px] mx-auto">
        <div>{children}</div>
      </main>
    </div>
  );
}
