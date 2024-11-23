import ListItem from "./ListItem";
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
            <ListItem value="Public">Water Information:</ListItem>
            <ListItem value="Public Sewer">Sewer Information:</ListItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Location">
            <ListItem value="Youngstown">Region:</ListItem>
            <ListItem value="City/Youngstown">Subdivision:</ListItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
