export default function InputFieldWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex px-20 w-full justify-between">{children}</div>;
}
