import Description from "@/app/components/Description";
import RentEase from "@/app/components/RentEase";
import Image from "next/image";
import signup2 from "@assests/signup2.svg";
import Button from "@/app/components/Button";
import LabelledTextArea from "@/app/components/FormComponents/LabelledTextArea";
import FormFileInput from "@/app/components/FormComponents/FormFileInput";
import DropDownMenu from "@/app/components/FormComponents/DropDownMenu";
import ButtonWrappers from "./ButtonsWrapper";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";
import { personSchema } from "@/validations/zodSchemas/personSchema";
import { useEffect, useState } from "react";
import LabelledInput from "@/app/components/FormComponents/LabelledInput";

type FormData = z.infer<typeof personSchema>;

type LegalInfoProps = {
  next: () => void;
  prev: () => void;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
};

export default function LegalInfoForm({
  prev,
  next,
  errors,
  setValue,
  watch,
  register,
}: LegalInfoProps) {
  console.log(errors);

  useEffect(() => {
    setValue("is_International_student", false);
    setValue("is_US_citizen", false);
  }, [setValue]);

  const [hasSSN, setHasSSN] = useState(false);
  const [isInternationalStudent, setIsInternationalStudent] = useState(false);
  const [isUSCitizen, setIsUSCitizen] = useState(false);
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 px-20 min-h-full flex flex-col items-center my-10">
        <div className="relative w-full my-6">
          <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
          <div className="relative z-10 bg-white w-max mx-auto h-full text-lg border border-black rounded-xl px-3">
            Legal and Financial Information
          </div>
        </div>

        <div className="h-full flex flex-col gap-10">
          <div>
            <ButtonWrappers>
              <Button
                onClick={() => setHasSSN(true)}
                label={"I have a SSN"}
                classes={`${hasSSN ? "bg-customRed-80" : ""} text-sm`}
              />
              <Button
                onClick={() => setHasSSN(false)}
                label={"I don't have a SSN"}
                classes={`${!hasSSN ? "bg-customRed-80" : ""} text-sm`}
              />
            </ButtonWrappers>
            {!hasSSN && (
              <div>
                <LabelledTextArea
                  id={"text"}
                  placeholder={"Give a valid reasoning"}
                  rows={5}
                  cols={30}
                  {...register("no_ssn_reason")}
                  error={errors?.no_ssn_reason?.message}
                />
              </div>
            )}
            {hasSSN && (
              <div>
                <LabelledInput
                  {...register("ssn")}
                  error={errors?.ssn?.message}
                  label="Your SSN Number"
                  id={"ssn"}
                  required
                />
              </div>
            )}
          </div>

          <div>
            <ButtonWrappers>
              <Button
                onClick={() => {
                  setIsUSCitizen(true);
                  setIsInternationalStudent(false);
                  setValue("is_US_citizen", true);
                  setValue("is_International_student", false);
                }}
                label={"I am a US Citizen"}
                classes={`${isUSCitizen ? "bg-customRed-80" : ""} text-sm`}
              />
              <Button
                onClick={() => {
                  setIsUSCitizen(false);
                  setValue("is_US_citizen", false);
                }}
                label={"I am not a US Citizen"}
                classes={`${!isUSCitizen ? "bg-customRed-80" : ""} text-sm`}
              />
            </ButtonWrappers>
            {!isUSCitizen && (
              <div className="flex gap-16 ">
                <div>
                  <FormFileInput
                    setValue={setValue}
                    name={"visa"}
                    id={"visa"}
                    label={"Copy of US Visa"}
                    placeholder={"US Visa Scanned"}
                    error={errors?.visa?.message}
                  />
                </div>
                <div>
                  <FormFileInput
                    setValue={setValue}
                    name={"passport"}
                    id={"passport"}
                    label={"Valid Passport"}
                    placeholder={"Your Valid Passport"}
                    error={errors?.passport?.message}
                  />
                </div>
              </div>
            )}

            {isUSCitizen && (
              <div className="flex gap-16 ">
                <div>
                  <FormFileInput
                    setValue={setValue}
                    name={"drivers_license"}
                    id={"drivers_license"}
                    label={"Your Valid Driving License"}
                    placeholder={"Copy of driving license"}
                    error={errors?.drivers_license?.message}
                  />
                </div>
                <div>
                  <LabelledInput
                    id={"state_id"}
                    label={"State Id"}
                    placeholder={"Your State Id"}
                    {...register("state_id")}
                    error={errors?.state_id?.message}
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <ButtonWrappers>
              <Button
                onClick={() => {
                  setIsInternationalStudent(true);
                  setIsUSCitizen(false);
                  setValue("is_International_student", true);
                  setValue("is_US_citizen", false);
                }}
                label={"I am an International Student"}
                classes={`${isInternationalStudent ? "bg-customRed-80" : ""} text-sm`}
              />
              <Button
                onClick={() => {
                  setIsInternationalStudent(false);
                  setValue("is_International_student", false);
                }}
                label={"I am not an International Student"}
                classes={`${!isInternationalStudent ? "bg-customRed-80" : ""} text-sm`}
              />
            </ButtonWrappers>
            {isInternationalStudent && (
              <div className="">
                <div className="flex justify-center">
                  <FormFileInput
                    setValue={setValue}
                    name={"i_20"}
                    id={"i_20"}
                    label={"Valid i-20 Document"}
                    placeholder={"Scan of i20 document"}
                    error={errors?.i_20?.message}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between w-full">
            <div>
              <DropDownMenu
                watch={watch}
                setValue={setValue}
                name={"salary_range"}
                label={"Monthly Salary Range"}
                options={["< 300$", "300$ - 800$", "> 800$"]}
                error={errors?.salary_range?.message}
              />
            </div>
            <div>
              <FormFileInput
                setValue={setValue}
                name={"balance_statement"}
                id={"bank_statement"}
                label={"Previous 3 months bank statement"}
                placeholder={"Bank Statement"}
                error={errors?.balance_statement?.message}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-between w-full">
          <Button
            onClick={prev}
            label="Back"
            classes="text-primary-10 border border-primary-10"
          />
          <Button
            onClick={next}
            label="Next"
            classes="bg-primary-10 text-white border border-primary-10"
          />
        </div>
      </div>

      <div className="w-1/3 bg-customRed-95 min-h-full flex items-center justify-center">
        <div>
          <RentEase classes="mb-20" />
          <Description
            description="Just few more questions and we are ready to let you in"
            classes="my-16 max-w-sm"
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
