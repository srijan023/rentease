import { IconType } from "react-icons";
import InformationHeader from "./InformationHeader";

interface InformationCardProps {
  icon: IconType;
  title: string;
  type: string;
  children: React.ReactNode;
  short?: boolean;
}

export default function InformationCard(props: InformationCardProps) {
  return (
    <div
      className={`h-full  rounded-3xl bg-white border-black border-solid border overflow-hidden flex flex-col justify-between items-stretch`}
    >
      <InformationHeader title={props.title} icon={props.icon} />
      <div className="flex flex-col gap-0.5 flex-1">{props.children}</div>
      {!props.short && (
        <div className="mx-auto mb-2 cursor-pointer">View More</div>
      )}
    </div>
  );
}
