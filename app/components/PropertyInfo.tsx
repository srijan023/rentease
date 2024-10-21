import { HiOutlineLocationMarker } from "react-icons/hi";
import { abril } from "../fonts/font";
import { LuBedDouble } from "react-icons/lu";
import { TbFrame } from "react-icons/tb";

export default function PropertyInfo() {
  return (
    <div className="h-full relative rounded-3xl">
      <div className="h-full w-full absolute rounded-3xl">
        <img className="object-cover h-full w-full rounded-3xl" src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Test Image" />
      </div>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-black via-50% [#00000045] to-[#00000000] opacity-90"></div>
      <div className="absolute z-10 flex justify-end h-full w-full text-white px-8 py-6">
        <div className="w-1/3 flex py-4 justify-between flex-col">
          <h1 className="text-3xl tracking-wide" style={abril.style}>The Allene Villa</h1>
          <p className="text-sm">Charming and Inviting space, perfect for those seeking a warm and comfortable living environment</p>
          <div className="text-sm text-white flex flex-col gap-1">
            <div className="flex items-center gap-2 ">
              <HiOutlineLocationMarker />
              Peacefulville, United States
            </div>
            <div className="flex items-center gap-2">
              <LuBedDouble />3 bedrooms
            </div>
            <div className="flex items-center gap-2">
              <TbFrame /> 3000 sq. ft.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
