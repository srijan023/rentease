import Description from "@/app/components/Description";
import RentEase from "@/app/components/RentEase";
import Image from "next/image";
import signup3 from "@assests/signup3.svg";
import ButtonWrappers from "./ButtonsWrapper";
import LabelledTextArea from "@/app/components/FormComponents/LabelledTextArea";
import Button from "@/app/components/Button";
import { z } from "zod";
import { personSchema } from "@/validations/zodSchemas/personSchema";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { useEffect, useState } from "react";
import AuxContactForm from "./AuxContactForm";

type FormData = z.infer<typeof personSchema>;

type ContactFormProps = {
  prev: () => void;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
};
export default function ContactInfoForm({
  prev,
  register,
  errors,
  setValue,
  watch,
}: ContactFormProps) {
  const [prevAddress, setPrevAddress] = useState<boolean>(false);

  useEffect(() => {
    if (!prevAddress) {
      setValue("prev_landlord", {
        name: "",
        email: undefined,
        contact: "",
        state: "",
        region: "",
        sub_division: "",
        street: "",
      });
    }
  }, [setValue, prevAddress]);

  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-2/3 px-10 flex flex-col justify-between my-10">
          <div className="relative w-full my-6">
            <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
            <div className="relative z-10 bg-white w-max mx-auto  h-full text-lg border border-black rounded-xl px-3">
              Contacts Information
            </div>
          </div>
          <AuxContactForm
            name={"emergency_contact"}
            errors={errors}
            setValue={setValue}
            watch={watch}
            register={register}
          />
          <div>
            <ButtonWrappers>
              <Button
                label={"Previous Residence"}
                classes={`${prevAddress ? "bg-customRed-80" : ""} text-sm`}
                onClick={() => setPrevAddress(true)}
              />
              <Button
                label={"I don't have any"}
                classes={`${!prevAddress ? "bg-customRed-80" : ""} text-sm`}
                onClick={() => {
                  setPrevAddress(false);
                }}
              />
            </ButtonWrappers>
            {!prevAddress && (
              <div className="px-20">
                <LabelledTextArea
                  rows={4}
                  id={"no_residence_detail"}
                  {...register("no_residence_detail")}
                  error={errors?.no_residence_detail?.message}
                />
              </div>
            )}
            {prevAddress && (
              <AuxContactForm
                name={"prev_landlord"}
                watch={watch}
                setValue={setValue}
                register={register}
                errors={errors}
              />
            )}
          </div>

          <p className="text-center text-secondary-50 my-3">
            By clicking on the Sign Up button you agree with all the
            comapny&apos;s{" "}
            <span className="text-primary-40 font-semibold">
              terms and conditions
            </span>
          </p>

          <div className="flex justify-between w-full">
            <Button
              onClick={prev}
              label="Back"
              classes="text-primary-10 border border-primary-10"
            />
            <Button
              label={"Sign up"}
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
                src={signup3}
                alt="sign in illustration"
                priority
                width={700}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
