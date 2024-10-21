import { poppins_700, abril } from "@fonts/font";
import Button from "@components/Button";
import { FeatureCard } from "@components/FeatureCard";
import Container from "@components/Container";
import featureData from "@data/feature";
import Image from "next/image";
import heroImage from "@assests/hero.jpg";
import PropertyCard from "@components/PropertyCard";

export default function Home() {
  return (
    <>
      <Container>
        <h2
          className="text-6xl w-max mx-auto mt-48 mb-14 text-primary-10"
          style={abril.style}
        >
          Browse, Apply, and Move In
        </h2>
        <p
          className="max-w-2xl mx-auto text-center text-2xl text-neutral-30 tracking-wide "
          style={poppins_700.style}
        >
          A personalized property rental service where clients can easily browse
          listings, view property details, and apply to book online, all managed
          directly by the landlord for a seamless experience.
        </p>
        <Button
          classes={"bg-secondary-10 text-white mx-auto block my-24"}
          label="Browse Properties"
        />
        <div className="h-96 relative z-0 rounded-3xl text-white text-center">
          <Image
            src={heroImage}
            alt="Available flat in US"
            priority
            className="rounded-3xl object-cover"
            placeholder="blur"
            fill
          />
        </div>
        <div className="my-28 flex flex-wrap w-5/6 justify-center mx-auto gap-x-20 gap-y-24 ">
          {featureData.map((item, index) => {
            return (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <h2 className="text-5xl my-20 text-primary-10" style={abril.style}>
          What are you looking for?
        </h2>
        <div className="mb-20">
          <PropertyCard />
        </div>
      </Container>
    </>
  );
}
