export default function Tag({
  type,
  title,
}: {
  type?: string;
  title?: string;
}) {
  return (
    <div
      className={`rounded-2xl text-md py-1 w-fit px-4 ${type == "danger" ? "bg-customRed-70" : type == "normal" ? "bg-primary-40" : "bg-gray-500"} text-white`}
    >
      {title}
    </div>
  );
}
