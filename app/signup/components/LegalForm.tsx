import RentEase from "@components/RentEase";
import Description from "@components/Description";
import Image from "next/image";
import Button from "@/app/components/Button";
import signup2 from "@assests/signup2.svg";
import { UseFormRegister, FieldErrors, useForm } from "react-hook-form";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import { useEffect, useState } from "react";

type FormData = z.infer<typeof personSchema>;

interface LegalFormProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  // watch: UseFormWatch<FormData>;
  handleNextPage: () => void;
}

export default function LegalForm({
  register,
  errors,
  handleNextPage,
}: LegalFormProps) {
  const [hasSSN, setHasSSN] = useState(false);
  const [isInternationalStudent, setIsInternationalStudent] = useState(true);

  const { setValue, getValues } = useForm<FormData>();

  const [isUsCitizen, setIsUsCitizen] = useState<boolean>(
    getValues("is_US_citizen") || false,
  );

  useEffect(() => {
    setValue("is_US_citizen", isUsCitizen);
  }, [isUsCitizen, setValue]);

  const handleCitizenshipSelection = (value: boolean) => {
    setIsUsCitizen(value);
    setValue("is_US_citizen", value);
  };

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
            classes={`${hasSSN ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
            onClick={() => setHasSSN(true)}
            label="I have a SSN"
          />
          <Button
            type="button"
            classes={`${!hasSSN ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
            onClick={() => setHasSSN(false)}
            label="I don't have a SSN"
          />
        </div>
        {hasSSN && (
          <div className="w-full">
            <label htmlFor="ssn" className="mb-1 ml-2 font-medium">
              SSN&nbsp;<span className="text-red-500 font-extrabold">*</span>
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
              Reason&nbsp;<span className="text-red-500 font-extrabold">*</span>
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
            classes={`${isUsCitizen ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
            label="I am a US citizen"
            onClick={() => handleCitizenshipSelection(true)}
          />
          <Button
            type="button"
            classes={`${!isUsCitizen ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
            label="I am not a US citizen"
            onClick={() => handleCitizenshipSelection(false)}
          />
        </div>
        {isUsCitizen && (
          <div className="flex gap-8 w-full">
            <div className="w-1/2">
              <label htmlFor="state_id" className="mb-1 ml-2 font-medium">
                State Id&nbsp;
                <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                type="file"
                {...register("state_id")}
                className="w-full border rounded p-2"
                id="state_id"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="drivers_license"
                className="mb-1 ml-2 font-medium"
              >
                Driving License&nbsp;
                <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                id="drivers_license"
                type="file"
                {...register("drivers_license")}
                className="block w-full border rounded p-2"
              />
            </div>
          </div>
        )}

        {!isUsCitizen && (
          <div className="flex gap-8 w-full">
            <div className="w-1/2">
              <label htmlFor="visa" className="mb-1 ml-2 font-medium">
                Copy of US Visa&nbsp;
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
              <label htmlFor="passport" className="mb-1 ml-2 font-medium">
                Valid Passport&nbsp;
                <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                id="passport"
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
            classes={`${isInternationalStudent ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
            onClick={() => setIsInternationalStudent(true)}
            label="I am an International Student"
          />
          <Button
            type="button"
            classes={`${!isInternationalStudent ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
            onClick={() => setIsInternationalStudent(false)}
            label="I am not an International Student"
          />
        </div>
        {isInternationalStudent && (
          <div className="w-full">
            <label htmlFor="i_20" className="mb-1 ml-2 font-medium">
              Valid I-20 Document&nbsp;
              <span className="text-red-500 font-extrabold">*</span>
            </label>
            <input
              id="i_20"
              type="file"
              {...register("i_20")}
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
            />
          </div>
        )}
        <div className="flex gap-4 w-full mt-10">
          <div className="w-1/2">
            <label htmlFor="salary_range" className="mb-1 ml-2 font-medium">
              Monthly Salary Range
            </label>
            <select
              id="salary_range"
              className="w-full bg-white px-4 py-2 border border-gray-300 rounded-full"
            >
              <option value="">Select your option</option>
              <option value="0-1000">$0 - $1000</option>
              <option value="1000-5000">$1000 - $5000</option>
              <option value="5000+">$5000+</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="balance_statement"
              className="mb-1 ml-2 font-medium"
            >
              Previous 3 months bank statement&nbsp;
              <span className="text-red-500 font-extrabold">*</span>
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              {...register("balance_statement")}
              id="balance_statement"
            />
          </div>
        </div>
        <div className="w-full flex justify-around my-10">
          <Button label="Back" classes="border border-black text-xl" />
          <Button
            label="Next"
            classes="text-xl bg-black text-white"
            onClick={handleNextPage}
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
