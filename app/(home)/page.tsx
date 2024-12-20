import Button from "@components/Button";
import { FeatureCard } from "@/app/(home)/components/FeatureCard";
import featureData from "@data/feature";
import Image from "next/image";
import heroImage from "@assests/hero.jpg";
import PropertyCard from "@components/PropertyCard";
import UnprotectedContainer from "./components/UnprotectedContainer";

export default function Home() {
  return (
    <>
      <UnprotectedContainer classes="mt-48 bg-white">
        <h2 className="text-6xl font-header mb-14 text-primary-10 text-center">
          Browse, Apply, and Move In
        </h2>
        <p className="font-body mx-auto text-center text-xl text-neutral-30 font-medium w-[600px] tracking-wide ">
          A personalized property rental service where clients can easily browse
          listings, view property details, and apply to book online, all managed
          directly by the landlord for a seamless experience.
        </p>
        <Button
          classes={"text-xl bg-secondary-10 text-white mx-auto block my-24"}
          label="Browse Properties"
        />
        <div className="h-96 relative z-0 rounded-3xl text-white text-center w-full">
          <Image
            src={heroImage}
            alt="Available flat in US"
            priority
            className="rounded-3xl object-cover"
            placeholder="blur"
            fill={true}
          />
        </div>
        <div className="my-28 flex flex-wrap justify-center mx-auto gap-x-20 gap-y-24 ">
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
        <h2 className="text-5xl mt-20 mb-10 text-primary-10 font-header">
          What are you looking for?
        </h2>
        <div className="mb-20">
          <PropertyCard />
        </div>
      </UnprotectedContainer>
    </>
  );
}
