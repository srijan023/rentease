"use client";

import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { TbFrame } from "react-icons/tb";

export default function Property() {
  const text = ["first", "second", "third", "fourth"];
  const [current, setCurrent] = useState(0);
  return (
    <div>
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
      <div className="flex justify-between items-center">
        {/*Top level div*/}
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Cosy Apartment for Rent</h1>
          <p className="text-secondary-50 font-semibold flex gap-2 items-center">
            <span className="text-2xl">
              <GrLocation />
            </span>
            <span>East Riverside - Oltarf, Austin Texas</span>
          </p>
          <p className="text-md">
            <span className="font-semibold">Description: </span>
            located on the plateau central and close to all amenities, the
            location of this apartment on the first floor of a downtown building
            will be ideal for your “chill and work”. A large living room open to
            the kitchen and the work area with sofa bed, a flat screen TV,
            coffee table. A dining table for your taste your best dishes and
            four chairs. For travelers the most music lovers, a Bluetooth
            speaker is at your disposal and of course internet broadband with
            WiFi.
          </p>
        </div>
        <div className="w-64 flex flex-col gap-2">
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <span>
                <TbFrame />
              </span>
              <span>Area</span>
            </div>
            <div className="text-right">1,250 sq.ft</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <span>
                <TbFrame />
              </span>
              <span>Area</span>
            </div>
            <div className="text-right">1,250 sq.ft</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <span>
                <TbFrame />
              </span>
              <span>Area</span>
            </div>
            <div className="text-right">1,250 sq.ft</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <span>
                <TbFrame />
              </span>
              <span>Area</span>
            </div>
            <div className="text-right">1,250 sq.ft</div>
          </div>
        </div>
      </div>
    </div>
  );
}
