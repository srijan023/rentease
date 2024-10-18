import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import { abril } from "@fonts/font";
import Description from "@components/Description";
import RentEase from "@/app/components/RentEase";
import signup1 from "@assests/signup1.svg";

type FormData = z.infer<typeof personSchema>;

interface BasicFormProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BasicForm({
  register,
  errors,
  setShowModal,
}: BasicFormProps) {
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 bg-[#fff1f1] h-full flex items-center justify-center">
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
      <div className="w-1/2">
        <h2 className="text-4xl text-center" style={abril.style}>
          Create Your Account
        </h2>
        <Description description="Join us today to simplify your property search and application process" />
        <div className="flex justify-center">
          <div className="border px-4 py-2 rounded-full bg-gray-100">
            Personal Details
          </div>
        </div>
        <div>
          <label>
            Name <span className="text-red-500 font-extrabold">*</span>
          </label>
          <input
            {...register("name")}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label>Email *</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Recovery Email</label>
          <input
            {...register("backup_email")}
            type="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Your Recovery Email"
          />
        </div>
        <div>
          <label>Password *</label>
          <input
            {...register("password")}
            type="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Your Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label>Phone Number *</label>
          <input
            {...register("contact")}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter Your Phone Number"
          />
          {errors.contact && (
            <p className="text-red-500">{errors.contact.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded mt-4"
        >
          Next
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
