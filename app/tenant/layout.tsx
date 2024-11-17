import NavBar from "@components/NavBar";

export default function TenantLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <NavBar />
      <main className="">{children}</main>{" "}
    </div>
  );
}
