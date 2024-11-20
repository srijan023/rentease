import Description from "@/app/components/Description";
import LabelledInput from "@/app/components/FormComponents/LabelledInput";
import RentEase from "@/app/components/RentEase";
import Image from "next/image";
import signup1 from "@assests/signup1.svg";
import Subtitle from "@/app/components/Subtitle";
import Button from "@/app/components/Button";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { personSchema } from "@/validations/zodSchemas/personSchema";

type FormData = z.infer<typeof personSchema>;

type BasicFormProps = {
  next: () => void;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BasicInfoForm({
  next,
  errors,
  register,
  setShowModal,
}: BasicFormProps) {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-customRed-95 min-h-full flex items-center justify-center">
        <div>
          <RentEase classes="mb-12" />
          <Description
            description="Find your next home effortlessly with RentEase. Simple, fast, and
            hassle-free property rentals."
            classes="mt-4"
          />
          <div className="flex justify-center px-8 mt-10">
            <Image
              src={signup1}
              alt="sign in illustration"
              priority
              width={700}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 px-20 my-10 min-h-full flex flex-col items-center justify-between">
        <div className="w-full flex flex-col gap-4">
          <Subtitle text="Create Your Account" />
          <Description
            description="Join us today to simplify your property search and application process"
            classes="tracking-wide"
          />
          <div className="relative w-full my-4">
            <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
            <div className="relative z-10 bg-white w-max mx-auto  h-full text-lg border border-black rounded-xl px-3">
              Personal Details
            </div>
          </div>
        </div>
        <div className="flex w-full px-20 flex-col justify-evenly h-full">
          <div>
            <LabelledInput
              {...register("name")}
              label={"Name"}
              id={"name"}
              placeholder={"Enter Your Name"}
              error={errors?.name?.message}
            />
          </div>
          <div>
            <LabelledInput
              {...register("email")}
              error={errors?.email?.message}
              label={"Email"}
              id={"email"}
              placeholder={"Enter Your Email"}
              type={"email"}
            />
          </div>
          <div>
            <LabelledInput
              {...register("dob")}
              error={errors?.dob?.message}
              label={"Date of Birth"}
              id={"dob"}
              type={"date"}
            />
          </div>

          <div>
            <LabelledInput
              error={errors?.password?.message}
              {...register("password")}
              label={"Password"}
              id={"password"}
              type={"password"}
            />
          </div>

          <div>
            <LabelledInput
              error={errors?.contact?.message}
              {...register("contact")}
              label={"Phone Number"}
              id={"contact"}
              type={"tel"}
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <Button label="Back" classes={"invisible"} />
          <Button
            onClick={next}
            label="Next"
            classes="bg-primary-10 text-white border border-primary-10"
          />
        </div>

        <div className="mt-5 w-full">
          <hr className="border-black w-full" />
          <p className="text-center my-5 text-lg">
            Already have an account?&nbsp;
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
