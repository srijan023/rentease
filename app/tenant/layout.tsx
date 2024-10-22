import NavBar from "../(home)/components/NavBar";

export default function TenantLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <NavBar />
      <main className="mt-32">{children}</main>
    </div>
  );
}
