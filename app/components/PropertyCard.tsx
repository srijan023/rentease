import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuBedDouble } from "react-icons/lu";
import { TbFrame } from "react-icons/tb";
import productcard from "@assests/productcard.jpg";

export default function PropertyCard() {
  return (
    <div className="h-[23rem] bg-white w-80 p-2 rounded-3xl overflow-hidden shadow-[4px_4px_10px_4px_rgba(0,0,0,0.3)] tracking-wide">
      <div className="h-3/5 relative rounded-2xl">
        <Image
          src={productcard}
          alt="property new york"
          placeholder="blur"
          className="rounded-2xl filter brightness-90 object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
        />
        <div className=" font-body absolute w-max z-10 bottom-4 right-4 bg-[rgba(255,255,255,0.5)] backdrop-filter backdrop-blur px-3 py-1 rounded-lg tracking-wider text-secondary-10">
          $3000 per month
        </div>
      </div>
      <div className="h-2/5 py-4 px-4 flex flex-col justify-between">
        <div className="text-xl font-bold text-secondary-10 font-body">
          Grand House
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <HiOutlineLocationMarker />
          Peacefulville, United States
        </div>
        <div className="flex flex-wrap justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <LuBedDouble />3 bedrooms
          </div>
          <div className="flex items-center gap-2">
            <TbFrame /> 3000 sq. ft.
          </div>
        </div>
      </div>
    </div>
  );
}
