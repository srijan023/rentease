import { abril } from "@fonts/font";

export default function Subtitle({
  text,
  classes = "",
}: {
  text: string;
  classes?: string;
}) {
  return (
    <h2
      className={`font-bold text-5xl text-center ${classes}`}
      style={abril.style}
    >
      {text}
    </h2>
  );
}
