import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { loginSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import { abril } from "@fonts/font";
import Button from "@components/Button";
import RentEase from "@components/RentEase";
import Description from "./Description";
import signin from "@assests/signin.svg";

interface SignInModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

type SignInFormData = z.infer<typeof loginSchema>;

export default function SignInModal({ show, setShow }: SignInModalProps) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(loginSchema),
  });

  const backdropRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        setShow(false);
        reset();
        setError("");
      }
    };

    const backdropElement = backdropRef.current;
    backdropElement?.addEventListener("click", handleOutsideClick);

    return () => {
      backdropElement?.removeEventListener("click", handleOutsideClick);
    };
  }, [show, setShow, reset]);

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      alert("Login Successful!");
      setShow(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error(err.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    }
  };

  if (!show) return null;

  return (
    <div
      ref={backdropRef}
      className="w-screen h-screen fixed inset-0 flex items-center justify-center z-[55] backdrop-filter backdrop-blur-sm bg-gray-300 bg-opacity-70"
    >
      <div ref={modalContentRef} className="bg-white rounded-2xl">
        <div className="flex">
          <div className="bg-[#fff1f1] rounded-l-2xl p-8">
            <RentEase />
            <Description
              description="All your rental needs in one place and securely maintained"
              classes="mt-4"
            />
            <div className="flex justify-center px-8">
              <Image
                src={signin}
                alt="sign in illustration"
                priority
                width={420}
              />
            </div>
          </div>
          <form
            className="space-y-4 flex items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="px-16">
              <h2
                className="font-bold text-4xl text-center mb-4"
                style={abril.style}
              >
                Welcome Back
              </h2>
              <Description description="Lets pick up where you left off!" />
              <div className="my-6">
                <label htmlFor="email" className="mb-1 ml-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1 ml-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  placeholder="Enter Your Password"
                  {...register("password")}
                />
              </div>
              <p
                className={`text-red-500 min-h-6 mt-2 px-2 max-w-sm max-h-12 overflow-hidden ${errors.email?.message || errors.password?.message ? "visible" : "invisible"} ${error ? "hidden" : ""}`}
              >
                Invalid email or password!!
              </p>
              <p
                className={`text-red-500 min-h-6 mt-2 px-2 max-w-sm max-h-12 overflow-hidden ${errors.email?.message || errors.password?.message ? "hidden" : ""} ${error ? "visible" : "hidden"}`}
              >
                {error}
              </p>

              <Button
                label="Sign In"
                type="submit"
                classes="bg-black text-white mx-auto block mt-5 mb-6"
              />
              <p className="mx-auto text-center text-lg">
                Do not have an account?&nbsp;
                <Link href="/signup" className="text-blue-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
