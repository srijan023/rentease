import { TbFrame } from "react-icons/tb";
import ListItem from "./ListItem";
import { MdOutlineAttachMoney, MdOutlineDirectionsCar } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { BiBath } from "react-icons/bi";

export default function PropertySummary() {
  return (
    <>
      <ListItem value={"1250 sq.ft"}>
        <span className="text-xl">
          <TbFrame />
        </span>
        <span>Area</span>
      </ListItem>
      <ListItem value={"$1200/m"}>
        <span className="text-xl">
          <MdOutlineAttachMoney />
        </span>
        <span>Price</span>
      </ListItem>
      <ListItem value={"2"}>
        <span className="text-xl">
          <LuBedDouble />
        </span>
        <span>Bedrooms</span>
      </ListItem>
      <ListItem value={"1"}>
        <span className="text-xl">
          <MdOutlineDirectionsCar />
        </span>
        <span>Parking</span>
      </ListItem>
      <ListItem value={"1"}>
        <span className="text-xl">
          <BiBath />
        </span>
        <span>Bathrooms</span>
      </ListItem>
    </>
  );
}
