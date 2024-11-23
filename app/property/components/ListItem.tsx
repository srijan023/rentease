export default function ListItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <div className="text-sm w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="flex gap-3 font-medium items-center text-secondary-30">
          {children}
        </div>
      </div>
      <div className="text-right text-secondary-30">{value}</div>
    </div>
  );
}
