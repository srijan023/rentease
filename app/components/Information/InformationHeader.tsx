import { IconType } from "react-icons";

export default function InformationHeader(props: {
  title: string;
  icon: IconType;
}) {
  return (
    <>
      <div className="flex font-semibold h-max items-center justify-between mx-4 pt-4 pb-2 text-lg border-b border-b-black">
        <div className="p-3 w-max bg-secondary-10 rounded-full">
          <props.icon className="text-2xl text-white" />
        </div>
        <div className={`text-center text-xl font-body`}>{props.title}</div>
      </div>
    </>
  );
}
