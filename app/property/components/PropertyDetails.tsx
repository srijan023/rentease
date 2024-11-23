export default function PropertyDetails({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-3">
      <h3 className="font-semibold text-secondary-40">{title}</h3>
      <div className="w-full flex flex-col gap-2">{children}</div>
    </div>
  );
}
