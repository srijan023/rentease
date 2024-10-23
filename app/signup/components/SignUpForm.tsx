"use client";

import { useState } from "react";
import BasicForm from "./BasicForm";
import LegalForm from "./LegalForm";
import ContactForm from "./ContactForm";
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
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(personSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const handleNextPage = async () => {
    const valid = await trigger(getCurrentFields(), { shouldFocus: true });
    if (valid) {
      setFormPage((prev) => prev + 1);
    } else {
      console.log("Validation failed for current page.");
      console.log(errors);
    }
  };

  const getCurrentFields = (): (keyof FormData)[] => {
    if (formPage === 1) {
      const fields: (keyof FormData)[] = [
        "name",
        "email",
        "password",
        "contact",
      ];

      if (watch("backup_email")) {
        fields.push("backup_email");
      }
      return fields;
    }

    if (formPage === 2) {
      const fields: (keyof FormData)[] = [
        // "ssn",
        // "no_ssn_reason",
        "is_US_citizen",
        // "state_id",
        // "drivers_license",
        "is_International_student",
        // "i_20",
        // "balance_statement",
      ];
      return fields;
    }
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
        {formPage === 2 && (
          <LegalForm
            register={register}
            errors={errors}
            handleNextPage={handleNextPage}
          />
        )}
        {formPage === 3 && <ContactForm />}
      </form>
      <SignInModal show={showModal} setShow={setShowModal} />
    </>
  );
}
