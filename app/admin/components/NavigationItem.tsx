"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationItem({
  link,
  label,
  children,
}: {
  link: string;
  label: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div
      className={`flex cursor-pointer gap-5 items-center text-secondary-40 ${path == link ? "bg-secondary-95" : ""} px-5 py-3 rounded-3xl `}
    >
      <div className="text-2xl">{children}</div>
      <Link className="text-lg" href={link}>
        {label}
      </Link>
    </div>
  );
}
