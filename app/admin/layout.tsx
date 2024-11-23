import NavBar from "../components/NavBar";
import NavigationPanel from "./components/NavigationPanel";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-body bg-background">
      <NavBar />
      <div className="flex">
        <NavigationPanel />
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </div>
    </div>
  );
}
