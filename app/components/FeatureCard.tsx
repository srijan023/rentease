import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="h-[23rem] w-80 rounded-3xl border-black border-solid border-[1px] overflow-hidden items-stretch">
      <div className="flex h-max items-center gap-4 p-4 text-xl">
        <div className="p-4 w-max bg-[var(--primary-black)] rounded-full">
          <props.icon className="text-2xl text-white" />
        </div>
        <div className="text-center">{props.title}</div>
      </div>
      <div className="bg-[#e0deea] text-[#44474f] h-full rounded-b-3xl p-4 text-center tracking-wide">
        {props.description}
      </div>
    </div>
  );
}

export { FeatureCard };
