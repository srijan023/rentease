"use client";

import { useState } from "react";
import BasicForm from "./BasicForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import SignInModal from "@components/SignInModal";

type FormData = z.infer<typeof personSchema>;

export default function SignUpForm() {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(personSchema) });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicForm
          register={register}
          errors={errors}
          setShowModal={setShowModal}
        />
      </form>
      <SignInModal show={showModal} setShow={setShowModal} />
    </>
  );
}
