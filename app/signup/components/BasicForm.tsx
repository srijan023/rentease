import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import Description from "@components/Description";
import RentEase from "@/app/components/RentEase";
import Button from "@components/Button";
import signup1 from "@assests/signup1.svg";
import Subtitle from "@/app/components/Subtitle";

type FormData = z.infer<typeof personSchema>;

interface BasicFormProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextPage: () => void;
}

export default function BasicForm({
  register,
  errors,
  setShowModal,
  handleNextPage,
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
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-20 min-h-full flex items-center justify-center">
        <div className="h-max">
          <Subtitle classes="mt-8 mb-4" text="Create Your Account" />
          <Description
            description="Join us today to simplify your property search and application process"
            classes="tracking-wide"
          />
          <div className="relative w-full my-8">
            <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
            <div className="relative z-10 bg-white w-max mx-auto  h-full text-lg border border-black rounded-xl px-3">
              Personal Details
            </div>
          </div>
          <div className="px-28">
            <div className="mb-6">
              <label htmlFor="name" className="mb-1 ml-2 font-medium">
                Name <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                placeholder="Enter Your Name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 ml-2">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 ml-2 font-medium">
                Email <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                placeholder="Enter Your Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 ml-2">{errors.email.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="backup" className="mb-1 ml-2 font-medium">
                Recovery Email
              </label>
              <input
                id="backup"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                placeholder="Enter Your Recovery Email"
                {...register("backup_email")}
              />
              {errors.backup_email && (
                <p className="text-red-500 ml-2">
                  {errors.backup_email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-1 ml-2 font-medium">
                Password <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                placeholder="Enter Your Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 ml-2">{errors.password.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="contact" className="mb-1 ml-2 font-medium">
                Phone Number
                <span className="text-red-500 font-extrabold">*</span>
              </label>
              <input
                id="contact"
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                placeholder="Enter Your Phone Number"
                {...register("contact")}
              />
              {errors.contact && (
                <p className="text-red-500 ml-2">{errors.contact.message}</p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              label="Next"
              onClick={handleNextPage}
              classes="text-xl bg-black text-white mt-2"
            />
          </div>
          <hr className="border-black my-8" />
          <p className="text-center mb-8 text-lg">
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
