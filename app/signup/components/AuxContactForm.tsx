import LabelledInput from "@/app/components/FormComponents/LabelledInput";
import InputFieldWrapper from "./InputFieldWrapper";
import { z } from "zod";
import { personSchema } from "@/validations/zodSchemas/personSchema";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import DropDownMenu from "@/app/components/FormComponents/DropDownMenu";

type FormData = z.infer<typeof personSchema>;
type AuxPersonProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
  name: "emergency_contact" | "prev_landlord";
};
export default function AuxContactForm({
  register,
  errors,
  watch,
  setValue,
  name,
}: AuxPersonProps) {
  return (
    <>
      <InputFieldWrapper>
        <div>
          <LabelledInput
            {...register(`${name}.name`)}
            label="Name"
            id={`${name}_name`}
            placeholder={"Emergency Contact's Name"}
          />
        </div>
        <div>
          <LabelledInput
            {...register(`${name}.email`)}
            label="Email"
            id={`${name}_email`}
            placeholder={"Emergency Contact's Email"}
            type={"email"}
          />
        </div>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <div>
          <LabelledInput
            {...register(`${name}.contact`)}
            label="Phone"
            id={`${name}_contact`}
            placeholder={"Emergency Contact's Phone No."}
            error={errors?.emergency_contact?.contact?.message}
          />
        </div>
        <div>
          <DropDownMenu
            watch={watch}
            setValue={setValue}
            name={`${name}.state`}
            options={["State1", "State2"]}
            label={"State"}
            error={errors?.emergency_contact?.state?.message}
          />
        </div>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <div>
          <DropDownMenu
            watch={watch}
            setValue={setValue}
            name={`${name}.region`}
            options={["Region1", "Region2"]}
            label={"Region"}
            error={errors?.emergency_contact?.region?.message}
          />
        </div>
        <div>
          <LabelledInput
            {...register(`${name}.sub_division`)}
            label="Sub division"
            id={`${name}_sub_division`}
            placeholder={"Sub-division name"}
            error={errors?.emergency_contact?.sub_division?.message}
          />
        </div>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <LabelledInput
          {...register(`${name}.street`)}
          label="Street"
          id={`${name}_street`}
          placeholder="Address Street"
          error={errors?.emergency_contact?.street?.message}
        />
      </InputFieldWrapper>
    </>
  );
}
