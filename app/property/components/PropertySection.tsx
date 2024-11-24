import PropertyDescriptionItem from "./ListItem";
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
            <PropertyDescriptionItem value="No Garage, None">
              Parking features:
            </PropertyDescriptionItem>
          </PropertyDetails>
          <PropertyDetails title="Property">
            <PropertyDescriptionItem value="2">
              Stories:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="Porch">
              {" "}
              Patio &amp; Porch Details:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Lot">
            <PropertyDescriptionItem value="7,492 sq.ft.">
              Lot Size:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="2,104 sq.ft.">
              Structure Area:
            </PropertyDescriptionItem>
          </PropertyDetails>
          <PropertyDetails title="Other Property Information">
            <PropertyDescriptionItem value="1234142.00">
              Parcel number:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="Yes">
              Attached to another structure:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
