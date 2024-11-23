"use client";

import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import PropertySummary from "./components/PropertySummary";
import InteriorSection from "./components/InteriorSection";
import PropertySection from "./components/PropertySection";
import ConstructionSection from "./components/ConstructionSection";
import UtilitiesCommunitySection from "./components/UtilitiesCommunitySection";
import PropertyCard from "../components/PropertyCard";

export default function Property() {
  const text = ["first", "second", "third", "fourth"];
  const [current, setCurrent] = useState(0);
  return (
    <div className="my-10">
      <div className="w-full h-96 rounded-xl my-10 bg-primary-50">
        <div>{text[current]}</div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setCurrent(
                (current - 1 < 0 ? text.length - 1 : current - 1) % text.length,
              );
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              setCurrent((current + 1) % text.length);
            }}
          >
            next
          </button>
        </div>
      </div>
      {/*The entier body of the property definition*/}
      <div>
        {/*Top level div*/}
        <div className="flex justify-between items-center">
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-xl font-bold">Cosy Apartment for Rent</h1>
            <p className="text-secondary-50 font-semibold flex gap-2 items-center">
              <span className="text-2xl">
                <GrLocation />
              </span>
              <span>East Riverside - Oltarf, Austin Texas</span>
            </p>
            <p className="text-sm font-medium text-secondary-40">
              <span className="font-semibold text-secondary-10">
                Description:{" "}
              </span>
              located on the plateau central and close to all amenities, the
              location of this apartment on the first floor of a downtown
              building will be ideal for your “chill and work”. A large living
              room open to the kitchen and the work area with sofa bed, a flat
              screen TV, coffee table. A dining table for your taste your best
              dishes and four chairs. For travelers the most music lovers, a
              Bluetooth speaker is at your disposal and of course internet
              broadband with WiFi.
            </p>
          </div>
          <div className="w-64 flex flex-col gap-2">
            <PropertySummary />
          </div>
        </div>
        {/*End of top level div*/}
        {/*The description div*/}
        <div className="grid grid-rows-2 gap-10 my-10">
          <div className="grid grid-cols-2 gap-10">
            <InteriorSection />
            <PropertySection />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <ConstructionSection />
            <UtilitiesCommunitySection />
          </div>
        </div>
        {/*The end of the description div*/}
        <h3 className="text-3xl my-10 font-header font-bold">
          You may also like to check
        </h3>
        <PropertyCard />
      </div>
    </div>
  );
}
