import ListItem from "./ListItem";
import PropertyDetails from "./PropertyDetails";
import PropertyDetailsContainer from "./PropertyDetailsContainer";
import SectionHeader from "./SectionHeader";

export default function PropertySection() {
  return (
    <div>
      <SectionHeader>Property</SectionHeader>
      <PropertyDetailsContainer>
        <div>
          <PropertyDetails title="Parking">
            <ListItem value="No Garage, None">Parking features:</ListItem>
          </PropertyDetails>
          <PropertyDetails title="Property">
            <ListItem value="2">Stories:</ListItem>
            <ListItem value="Porch"> Patio &amp; Porch Details:</ListItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Lot">
            <ListItem value="7,492 sq.ft.">Lot Size:</ListItem>
            <ListItem value="2,104 sq.ft.">Structure Area:</ListItem>
          </PropertyDetails>
          <PropertyDetails title="Other Property Information">
            <ListItem value="1234142.00">Parcel number:</ListItem>
            <ListItem value="Yes">Attached to another structure:</ListItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
