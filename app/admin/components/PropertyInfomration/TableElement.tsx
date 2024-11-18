export default function TableElement({
  value,
  title,
}: {
  title: string;
  value: string | null;
}) {
  return (
    <tr className="border-y-2 border-y-secondary-80 w-full">
      <td className="text-secondary-50 py-1">{title}</td>
      <td className="text-primary-10 text-right py-1">{value}</td>
    </tr>
  );
}
