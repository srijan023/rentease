"use client";

import { useState } from "react";
import BasicInfoForm from "./components/BasicInfoForm";
import LegalInfoForm from "./components/LegalInfoForm";
import ContactInfoForm from "./components/ContactInfoForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { personSchema } from "@/validations/zodSchemas/personSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInModal from "../components/SignInModal";

type FormData = z.infer<typeof personSchema>;

export default function Signup() {
  {
    /* Current form to display management*/
  }
  const [currentStep, setCurrentStep] = useState(0);

  type FieldName = keyof FormData;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    console.log("Output: ", output);
    if (!output) return;

    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  {
    //steps and field for each step
  }
  const steps = [
    {
      id: "Basic Information",
      fields: ["name", "email", "password", "contact", "dob"],
    },
    {
      id: "Legal Infomration",
      fields: [
        "ssn",
        "no_ssn_reason",
        "is_US_citizen",
        "drivers_license",
        "state_id",
        "passport",
        "visa",
        "is_International_student",
        "i_20",
        "balance_statement",
        "salary_range",
      ],
    },
    {
      id: "Contact Information",
      fields: [
        "no_residence_detail",
        "emergency_contact.name",
        "emergency_contact.email",
        "emergency_contact.contact",
        "emergency_contact.state",
        "emergency_contact.region",
        "emergency_contact.sub_division",
        "emergency_contact.street",
        "prev_landlord.name",
        "prev_landlord.email",
        "prev_landlord.contact",
        "prev_landlord.state",
        "prev_landlord.region",
        "prev_landlord.sub_division",
        "prev_landlord.street",
      ],
    },
  ];

  {
    // React hook form and zod for validation
  }
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(personSchema) });

  {
    // submit handler
  }
  const handleSignup: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <form onSubmit={handleSubmit(handleSignup)}>
        {currentStep === 0 && (
          <BasicInfoForm
            setShowModal={setShowModal}
            next={next}
            errors={errors}
            register={register}
          />
        )}
        {currentStep === 1 && (
          <LegalInfoForm
            setValue={setValue}
            next={next}
            prev={prev}
            register={register}
            errors={errors}
            watch={watch}
          />
        )}
        {currentStep === 2 && (
          <ContactInfoForm
            setValue={setValue}
            register={register}
            errors={errors}
            watch={watch}
            prev={prev}
          />
        )}
      </form>
      <SignInModal show={showModal} setShow={setShowModal} />
    </section>
  );
}
