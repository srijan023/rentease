import Button from "@/app/components/Button";
import HeaderSection from "../components/HeaderSection";
import PropertyCard from "../components/PropertyInfomration/PropertyCard";
import { properties } from "./data";

export default function PropertyInformation() {
  return (
    <div className="">
      <div className="w-full">
        <HeaderSection title={"Units"}>
          <Button
            label={"Add property"}
            classes="bg-primary-10 text-white"
          ></Button>
        </HeaderSection>
      </div>
      <div className="flex my-10 justify-between flex-wrap gap-10">
        {properties.map((property) => {
          return <PropertyCard key={property.unit} property={property} />;
        })}
      </div>
    </div>
  );
}
