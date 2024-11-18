import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  image?: StaticImageData;
  classes?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div
      className={`h-12 w-12 relative rounded-full overflow-hidden bg-secondary-50 flex justify-center items-center ${props.classes}`}
    >
      {props.image && (
        <Image
          src={props.image}
          alt="user avatar"
          fill
          className="object-cover object-center"
        />
      )}
      {!props.image && <span className="text-3xl text-white">A</span>}
    </div>
  );
}
