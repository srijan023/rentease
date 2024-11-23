import ListItem from "./ListItem";
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
            <ListItem value="2">Bedrooms:</ListItem>
            <ListItem value="2">Bathrooms:</ListItem>
          </PropertyDetails>
          <PropertyDetails title="Basement">
            <ListItem value="Yes">Has Basement:</ListItem>
            <ListItem value="Fully, Partially, Finished">Basement:</ListItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Heating and Cooling">
            <ListItem value="Forced Air, Gas"> Heating features:</ListItem>
            <ListItem value="Central Air">Cooling seatures:</ListItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
