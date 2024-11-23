import ListItem from "./ListItem";
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
            <ListItem value="Single Family">Home Type:</ListItem>
            <ListItem value="Conventional">Architecture Style:</ListItem>
          </PropertyDetails>
          <PropertyDetails title="Condition">
            <ListItem value="1952">Year Built:</ListItem>
          </PropertyDetails>
        </div>
        <div>
          <PropertyDetails title="Material Information">
            <ListItem value="Aluminium Sliding">
              Construction Material:
            </ListItem>

            <ListItem value="Asphalt, Fiberglass">Roof:</ListItem>
          </PropertyDetails>
          <PropertyDetails title="Other Construction">
            <ListItem value="Yes">Warranty Included:</ListItem>
          </PropertyDetails>
        </div>
      </PropertyDetailsContainer>
    </div>
  );
}
