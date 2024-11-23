export default function PropertyDetailsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-2 gap-10">{children}</div>;
}
