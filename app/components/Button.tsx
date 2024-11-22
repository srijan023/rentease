import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button" | undefined;
  classes?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`py-2 px-8 rounded-full tracking-wide outline-none font-body ${props.classes}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.label}
    </button>
  );
}
