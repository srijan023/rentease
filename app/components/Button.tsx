import { lato_400 } from "../fonts/font";

interface ButtonProps {
  classes?: string;
  label: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`text-xl py-2 px-7 rounded-full tracking-wide outline-none  ${props.classes}`}
      style={lato_400.style}
    >
      {props.label}
    </button>
  );
}
