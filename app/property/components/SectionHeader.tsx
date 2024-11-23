export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-center text-xl mb-1 text-secondary-30 font-semibold text-body">
      {children}
    </h3>
  );
}
