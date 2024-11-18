import NavBar from "@components/NavBar";

export default function TenantLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full bg-background">
      <NavBar />
      <main className="">{children}</main>{" "}
    </div>
  );
}
