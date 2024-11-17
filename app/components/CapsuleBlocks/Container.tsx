export default function CapsuleContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid items-center text-center grid-cols-5 bg-secondary-95 rounded-2xl">
      {children}
    </div>
  );
}
