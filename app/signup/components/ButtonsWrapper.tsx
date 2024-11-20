export default function ButtonWrappers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="my-5 flex justify-center">{children}</div>;
}
