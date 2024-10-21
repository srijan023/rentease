import RentEase from "@components/RentEase";
import Description from "@components/Description";
import Image from "next/image";
import signup2 from "@assests/signup2.svg";

export default function LegalForm() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 px-20 min-h-full flex flex-col items-center justify-center">
        <div className="relative w-full my-8">
          <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
          <div className="relative z-10 bg-[var(--background-white)] w-max mx-auto  h-full text-lg border border-black rounded-xl px-3">
            Legal and Financial Information{" "}
          </div>
        </div>
        <div className="flex space-x-8">
          <button className="">I have a SSN</button>
          <button>I don&apos;t have a SSN</button>
        </div>
      </div>
      <div className="w-1/3 bg-[var(--custom-red-95)] min-h-full flex items-center justify-center">
        <div>
          <RentEase classes="mb-12" />
          <Description
            description="We value your trust. Your information is collected solely for a smoother rental experience."
            classes="mt-4"
          />
          <div className="flex justify-center px-8 mt-10">
            <Image
              src={signup2}
              alt="sign in illustration"
              priority
              width={700}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
