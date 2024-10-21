import { IconType } from "react-icons";

export default function InfomrationHeader(props: { title: string, icon: IconType }) {
  return <>
    <div className="flex h-max items-center justify-between mx-4 py-2 text-lg bg-white border-b-2 border-b-black">
      <div className="p-3 w-max bg-secondary-10 rounded-full">
        <props.icon className="text-2xl text-white" />
      </div>
      <div className={`text-center bg-white font-extrabold`}>{props.title}</div>
    </div>
  </>
}
