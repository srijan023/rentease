import { MouseEventHandler } from "react";
import { poppins_400 } from "@fonts/font";

interface ButtonProps {
  label: string;
  classes?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`text-xl py-2 px-7 rounded-full tracking-wide outline-none  ${props.classes}`}
      style={poppins_400.style}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
