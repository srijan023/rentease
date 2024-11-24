import PropertyDescriptionItem from "./ListItem";
import PropertyDetails from "./PropertyDetails";
import PropertyDetailsContainer from "./PropertyDetailsContainer";
import SectionHeader from "./SectionHeader";

export default function UtilitiesCommunitySection() {
  return (
    <div>
      <SectionHeader>Utilities and Community</SectionHeader>
      <PropertyDetailsContainer>
        <div>
          <PropertyDetails title="Utility">
            <PropertyDescriptionItem value="Public">
              Water Information:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="Public Sewer">
              Sewer Information:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Location">
            <PropertyDescriptionItem value="Youngstown">
              Region:
            </PropertyDescriptionItem>
            <PropertyDescriptionItem value="City/Youngstown">
              Subdivision:
            </PropertyDescriptionItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
