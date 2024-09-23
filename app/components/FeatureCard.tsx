import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="h-96 w-80 rounded-3xl border-black border-solid border-[1px] text-wider">
      <div className="flex h-1/5 items-center gap-4 py-4 px-4 text-xl">
        <div className="p-3 w-max bg-[var(--primary-black)] rounded-full">
          <props.icon className="text-2xl text-white" />
        </div>
        <div>{props.title}</div>
      </div>
      <div className="bg-[#e0deea] text-[#44474f] h-4/5 rounded-b-3xl py-6 px-4 text-center">
        {props.description}
      </div>
    </div>
  );
}

export { FeatureCard };
