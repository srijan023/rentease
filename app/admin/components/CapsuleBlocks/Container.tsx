export default function CapsuleContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full grid items-center text-center grid-cols-6 bg-secondary-95 rounded-2xl">
      {children}
    </div>
  );
}
