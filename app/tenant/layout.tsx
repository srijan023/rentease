export default function TenantLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      NavBar Component<main>{children}</main>
    </div>
  );
}
