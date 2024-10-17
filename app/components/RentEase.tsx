import { abril } from "@fonts/font";

export default function RentEase({ classes = "" }: { classes?: string }) {
  return (
    <h2
      style={abril.style}
      className={`font-bold text-5xl text-center ${classes}`}
    >
      RentEase
    </h2>
  );
}