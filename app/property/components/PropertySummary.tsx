import { TbFrame } from "react-icons/tb";
import PropertyDescriptionItem from "./ListItem";
import { MdOutlineAttachMoney, MdOutlineDirectionsCar } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { BiBath } from "react-icons/bi";

export default function PropertySummary() {
  return (
    <>
      <PropertyDescriptionItem value={"1250 sq.ft"}>
        <span className="text-xl">
          <TbFrame />
        </span>
        <span>Area</span>
      </PropertyDescriptionItem>
      <PropertyDescriptionItem value={"$1200/m"}>
        <span className="text-xl">
          <MdOutlineAttachMoney />
        </span>
        <span>Price</span>
      </PropertyDescriptionItem>
      <PropertyDescriptionItem value={"2"}>
        <span className="text-xl">
          <LuBedDouble />
        </span>
        <span>Bedrooms</span>
      </PropertyDescriptionItem>
      <PropertyDescriptionItem value={"1"}>
        <span className="text-xl">
          <MdOutlineDirectionsCar />
        </span>
        <span>Parking</span>
      </PropertyDescriptionItem>
      <PropertyDescriptionItem value={"1"}>
        <span className="text-xl">
          <BiBath />
        </span>
        <span>Bathrooms</span>
      </PropertyDescriptionItem>
    </>
  );
}
