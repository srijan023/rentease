"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { z } from "zod";

import BasicForm from "./BasicForm";
import LegalForm from "./LegalForm";
import ContactForm from "./ContactForm";
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

  console.log(errors);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state.formPage || 1;
      setFormPage(page);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const handleNextPage = async () => {
    const valid = await trigger(getCurrentFields(), { shouldFocus: true });
    if (valid) {
      const nextPage = formPage + 1;
      setFormPage(nextPage);
      window.history.pushState(
        { formPage: nextPage },
        "",
        `?pages=${nextPage}`,
      );
    } else {
      console.log("Validation failed for current page.");
      console.log(errors);
    }
  };

  const handlePrevPage = () => {
    const prevPage = formPage - 1;
    setFormPage(prevPage);
    window.history.pushState({ formPage: prevPage }, "", `?page=${prevPage}`);
    console.log(formPage);
  };

  const getCurrentFields = (): (keyof FormData)[] => {
    if (formPage === 1) {
      const fields: (keyof FormData)[] = [
        // "name",
        // "email",
        // "password",
        // "contact",
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
        // "is_US_citizen",
        // "state_id",
        // "drivers_license",
        // "is_International_student",
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
            handlePrevPage={handlePrevPage}
          />
        )}
        {formPage === 3 && (
          <ContactForm
            register={register}
            errors={errors}
            handlePrevPage={handlePrevPage}
          />
        )}
      </form>
      <SignInModal show={showModal} setShow={setShowModal} />
    </>
  );
}
