import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard(props: FeatureCardProps) {
  return (

    <div className="h-[23.5rem] w-80 rounded-3xl border-black border-solid border-[1px] overflow-hidden items-stretch">

      <div className="flex h-max items-center justify-around p-4 text-lg bg-white">
        <div className="p-4 w-max bg-secondary-10 rounded-full">
          <props.icon className="text-2xl text-white" />
        </div>
        <div className="text-center bg-white">{props.title}</div>
      </div>
      <div className="bg-secondary-95 text-neutral-30 h-full rounded-b-3xl p-6 text-center">
        {props.description}
      </div>
    </div>
  );
}

export { FeatureCard };
