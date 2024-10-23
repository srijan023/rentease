import { IconType } from "react-icons";
import { poppins_700 } from "@fonts/font";

export default function InformationHeader(props: {
  title: string;
  icon: IconType;
}) {
  return (
    <>
      <div className="flex h-max items-center justify-between mx-4 pt-4 pb-2 text-lg border-b border-b-black">
        <div className="p-3 w-max bg-secondary-10 rounded-full">
          <props.icon className="text-2xl text-white" />
        </div>
        <div className={`text-center text-xl`} style={poppins_700.style}>
          {props.title}
        </div>
      </div>
    </>
  );
}
