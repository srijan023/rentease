"use client";
import Button from "@/app/components/Button";
import LabelledInput from "@/app/components/FormComponents/LabelledInput";
import { loginSchema } from "@/validations/zodSchemas/personSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Signin() {
  type FormData = z.infer<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });
  const handleLogin = async (data: FormData) => {
    const response = await axios.post(
      "http://localhost:3000/api/auth/admin/signin",
      data,
    );
    console.log(response);
  };

  const handleForgotPassword = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const response = await axios.get(
      "http://localhost:3000/api/auth/admin/forgotPassword",
    );

    if (!response.data.success) {
      console.log("Could not reset the password");
    } else {
      console.log("Password reset successful, check your mail for login");
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto font-body ">
      <div className="flex flex-col justify-center gap-5 min-h-screen items-center py-10">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="border border-secondary-50 p-5 rounded-xl"
        >
          <div>
            <h1 className="font-header text-4xl tracking-wide text-center border-b border-secondary-50 pb-3">
              Login
            </h1>
          </div>
          <div className="w-[320px] py-5 flex flex-col gap-3">
            <LabelledInput
              type="email"
              label={"Email"}
              id={"email"}
              {...register("email")}
              error={errors?.email?.message}
            />
            <LabelledInput
              type="password"
              label={"Password"}
              id={"password"}
              {...register("password")}
              error={errors?.password?.message}
            />
          </div>
          <div className="flex justify-center">
            <p className="text-secondary-30">
              <button onClick={(e) => handleForgotPassword(e)}>
                Forgot password
              </button>
            </p>
          </div>
          <div className="flex justify-center py-5">
            <Button
              type="submit"
              label={"Sign in"}
              classes="bg-primary-10 text-white text-lg"
            />
          </div>
        </form>

        <div>
          <p className="max-w-[500px] text-center p-3 bg-orange-300 text-primary-10 rounded-xl">
            If this is your first time loggin in, click on forgot password and a
            recovery password would be sent to your registered email
          </p>
        </div>
      </div>
    </div>
  );
}
