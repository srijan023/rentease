import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  image?: StaticImageData;
  classes?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div
      className={`h-14 w-14 relative rounded-full overflow-hidden bg-orange-500 flex justify-center items-center ${props.classes}`}
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
