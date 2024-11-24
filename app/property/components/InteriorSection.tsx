import PropertyDescriptionItem from "./ListItem";
import PropertyDetails from "./PropertyDetails";
import PropertyDetailsContainer from "./PropertyDetailsContainer";
import SectionHeader from "./SectionHeader";

export default function InteriorSection() {
  return (
    <div>
      <SectionHeader>Interior</SectionHeader>
      <PropertyDetailsContainer>
        <div>
          <PropertyDetails title="Bedroom and Bathrooms">
            <PropertyDescriptionItem value="2">
              Bedrooms:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="2">
              Bathrooms:
            </PropertyDescriptionItem>
          </PropertyDetails>
          <PropertyDetails title="Basement">
            <PropertyDescriptionItem value="Yes">
              Has Basement:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="Fully, Partially, Finished">
              Basement:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Heating and Cooling">
            <PropertyDescriptionItem value="Forced Air, Gas">
              {" "}
              Heating features:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="Central Air">
              Cooling seatures:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
