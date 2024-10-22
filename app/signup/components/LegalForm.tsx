import RentEase from "@components/RentEase";
import Description from "@components/Description";
import Image from "next/image";
import Button from "@/app/components/Button";
import signup2 from "@assests/signup2.svg";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import { useState } from "react";

type FormData = z.infer<typeof personSchema>;

interface LegalFormProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  // watch: UseFormWatch<FormData>;
  // handleNextPage: () => void;
}

export default function LegalForm({ register, errors }: LegalFormProps) {
  const [hasSSN, setHasSSN] = useState(false);
  const [isUsCitizen, setIsUsCitizen] = useState(false);
  const [isInternationalStudent, setIsInternationalStudent] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 px-20 min-h-full flex flex-col items-center justify-center">
        <div className="relative w-full my-6">
          <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
          <div className="relative z-10 bg-[var(--background-white)] w-max mx-auto  h-full text-lg border border-black rounded-xl px-3">
            Legal and Financial Information{" "}
          </div>
        </div>
        <div className="flex gap-8 mb-4">
          <Button
            type="button"
            classes={`${hasSSN ? "bg-customRed-80" : "bg-gray-200"} text-base`}
            onClick={() => setHasSSN(true)}
            label="I have a SSN"
          />
          <Button
            type="button"
            classes={`${!hasSSN ? "bg-customRed-80" : "bg-gray-200"} text-base`}
            onClick={() => setHasSSN(false)}
            label="I don't have a SSN"
          />
        </div>
        {hasSSN && (
          <div className="w-full">
            <label htmlFor="ssn" className="mb-1 ml-2 font-medium">
              SSN <span className="text-red-500 font-extrabold">*</span>
            </label>
            <input
              id="ssn"
              type="text"
              {...register("ssn")}
              className="w-full  px-4 py-2 border border-gray-300 rounded-full"
            />
          </div>
        )}
        {!hasSSN && (
          <div className="w-full">
            <label htmlFor="no_ssn_reason" className="mb-1 ml-2 font-medium">
              Reason <span className="text-red-500 font-extrabold">*</span>
            </label>
            <textarea
              id="no_ssn_reason"
              {...register("no_ssn_reason")}
              placeholder="Give a valid reasoning"
              className="p-2 w-full rounded-xl border border-gray-300"
            ></textarea>
          </div>
        )}
        <div className="flex gap-8 mt-10 mb-4">
          <Button
            type="button"
            classes={`${isUsCitizen ? "bg-customRed-80" : "bg-gray-200"} text-base`}
            onClick={() => setIsUsCitizen(true)}
            label="I am a US citizen"
          />
          <Button
            type="button"
            classes={`${!isUsCitizen ? "bg-customRed-80" : "bg-gray-200"} text-base`}
            onClick={() => setIsUsCitizen(false)}
            label="I am not a US citizen"
          />
        </div>
        {!isUsCitizen && (
          <div className="flex gap-8">
            <div className="w-1/2">
              <label htmlFor="visa" className="mb-1 ml-2 font-medium">
                Copy of US Visa{" "}
                <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                type="file"
                {...register("visa")}
                className="w-full border rounded p-2"
                id="visa"
              />
            </div>
            <div className="w-1/2">
              <label>Valid Passport *</label>
              <input
                type="file"
                {...register("passport")}
                className="block w-full border rounded p-2"
              />
            </div>
          </div>
        )}
        <div className="flex gap-8 mt-10 mb-4">
          <Button
            type="button"
            classes={`${isInternationalStudent ? "bg-customRed-80" : "bg-gray-200"} text-base`}
            onClick={() => setIsInternationalStudent(true)}
            label="I am an International Student"
          />
          <Button
            type="button"
            classes={`${!isInternationalStudent ? "bg-customRed-80" : "bg-gray-200"} text-base`}
            onClick={() => setIsInternationalStudent(false)}
            label="I am not an International Student"
          />
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
