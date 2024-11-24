import PropertyDescriptionItem from "./ListItem";
import PropertyDetails from "./PropertyDetails";
import PropertyDetailsContainer from "./PropertyDetailsContainer";
import SectionHeader from "./SectionHeader";

export default function ConstructionSection() {
  return (
    <div>
      <SectionHeader>Construction</SectionHeader>
      <PropertyDetailsContainer>
        <div>
          <PropertyDetails title="Type and Style">
            <PropertyDescriptionItem value="Single Family">
              Home Type:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="Conventional">
              Architecture Style:
            </PropertyDescriptionItem>
          </PropertyDetails>
          <PropertyDetails title="Condition">
            <PropertyDescriptionItem value="1952">
              Year Built:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Material Information">
            <PropertyDescriptionItem value="Aluminium Sliding">
              Construction Material:
            </PropertyDescriptionItem>

            <PropertyDescriptionItem value="Asphalt, Fiberglass">
              Roof:
            </PropertyDescriptionItem>
          </PropertyDetails>
          <PropertyDetails title="Other Construction">
            <PropertyDescriptionItem value="Yes">
              Warranty Included:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
