"use client";

import { useState } from "react";
import BasicForm from "./BasicForm";
import LegalForm from "./LegalForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";
import SignInModal from "@components/SignInModal";

type FormData = z.infer<typeof personSchema>;

export default function SignUpForm() {
  const [showModal, setShowModal] = useState(false);
  const [formPage, setFormPage] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(personSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const handleNextPage = async () => {
    const valid = await trigger(getCurrentFields(), { shouldFocus: true });
    if (valid) setFormPage((prev) => prev + 1);
    else console.log("Validation failed for current page.");
  };

  const getCurrentFields = (): (keyof FormData)[] => {
    if (formPage === 1) return ["name", "email", "password", "contact"];
    return [];
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formPage === 1 && (
          <BasicForm
            register={register}
            errors={errors}
            setShowModal={setShowModal}
            handleNextPage={handleNextPage}
          />
        )}
        {formPage === 2 && <LegalForm />}
      </form>
      <SignInModal show={showModal} setShow={setShowModal} />
    </>
  );
}
