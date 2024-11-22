export default function Subtitle({
  text,
  classes = "",
}: {
  text: string;
  classes?: string;
}) {
  return (
    <h2 className={`font-header font-bold text-5xl text-center ${classes}`}>
      {text}
    </h2>
  );
}
