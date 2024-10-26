import { z } from "zod";
import { personSchema } from "@validations/zodSchemas/personSchema";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import RentEase from "@components/RentEase";
import Description from "@components/Description";
import Image from "next/image";
import Button from "@components/Button";

import signup3 from "@assests/signup3.svg";
import { useState, useRef } from "react";

type FormData = z.infer<typeof personSchema>;

interface ContactFormProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  handlePrevPage: () => void;
}

export default function ContactForm(props: ContactFormProps) {
  const [hasPrevResidence, setHasPrevResidence] = useState<boolean>(false);

  const t_and_c = useRef(null);

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 px-20 min-h-full flex flex-col items-center justify-center">
        <div className="relative w-full my-6">
          <hr className="absolute border-0 h-[1px] bg-black w-full top-1/2 inset-0" />
          <div className="relative z-10 bg-white w-max mx-auto  h-full text-lg border border-black rounded-xl px-3">
            Contacts Information
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <label htmlFor="contact_name" className="mb-1 ml-2 font-medium">
              Name&nbsp;<span className="text-red-500 font-extrabold">*</span>
            </label>
            <input
              type="text"
              id="contact_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              placeholder="Emergency Contact's Name"
              {...props.register("emergency_contact.name")}
            />
            {props.errors.emergency_contact?.name && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.name.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact_email" className="mb-1 ml-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="contact_email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              placeholder="Emergency Contact's Email"
              {...props.register("emergency_contact.email")}
            />
            {props.errors.emergency_contact?.email && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact_contact" className="mb-1 ml-2 font-medium">
              Phone&nbsp;<span className="text-red-500 font-extrabold">*</span>
            </label>
            <input
              type="tel"
              id="contact_contact"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              placeholder="Emergency Contact's Phone No."
              {...props.register("emergency_contact.contact")}
            />
            {props.errors.emergency_contact?.contact && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.contact.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact_state" className="mb-1 ml-2 font-medium">
              State&nbsp;<span className="text-red-500 font-extrabold">*</span>
            </label>
            <select
              id="contact_state"
              className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white"
              {...props.register("emergency_contact.state")}
            >
              <option value="">Select your option</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
            {props.errors.emergency_contact?.state && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.state.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact_region" className="mb-1 ml-2 font-medium">
              Region&nbsp;<span className="text-red-500 font-extrabold">*</span>
            </label>
            <select
              id="contact_region"
              className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white"
              {...props.register("emergency_contact.region")}
            >
              <option value="">Select your option</option>
              <option value="region1">Region 1</option>
              <option value="region2">Region 2</option>
            </select>
            {props.errors.emergency_contact?.region && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.region.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="contact_subdivision"
              className="mb-1 ml-2 font-medium"
            >
              Subdivision
            </label>
            <input
              type="text"
              id="contact_subdivision"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              placeholder="Sub-division name"
              {...props.register("emergency_contact.sub_division")}
            />
            {props.errors.emergency_contact?.sub_division && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.sub_division.message}
              </p>
            )}
          </div>
          <div className="col-span-2 mt-6">
            <label htmlFor="contact_street" className="mb-1 ml-2 font-medium">
              Street
            </label>
            <input
              type="text"
              id="contact_street"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              placeholder="Address Street"
              {...props.register("emergency_contact.street")}
            />
            {props.errors.emergency_contact?.street && (
              <p className="text-red-500 ml-2">
                {props.errors.emergency_contact.street.message}
              </p>
            )}
          </div>
          <div className="col-span-2 flex gap-8 justify-center mt-6">
            <Button
              type="button"
              classes={`${hasPrevResidence ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
              onClick={() => setHasPrevResidence(true)}
              label="Previous Residence"
            />
            <Button
              type="button"
              classes={`${!hasPrevResidence ? "bg-customRed-80" : "bg-gray-200"} text-lg`}
              onClick={() => setHasPrevResidence(false)}
              label="I don't have any"
            />
          </div>
          {!hasPrevResidence && (
            <div className="col-span-2">
              <textarea
                id="no_ssn_reason"
                {...props.register("no_residence_detail")}
                placeholder="Give a valid reasoning"
                rows={4}
                className="p-2 w-full rounded-xl border border-gray-300"
              />
            </div>
          )}
          <div className="col-span-2 flex items-center justify-center space-x-2 mt-4 text-lg">
            <input
              ref={t_and_c}
              id="terms_and_conditions"
              type="checkbox"
              checked
              className=""
            />
            <label htmlFor="terms_and_conditions" className="text-gray-700">
              I agree with the&nbsp;
              <span className="text-blue-600 font-bold">
                Terms and Conditions
              </span>
            </label>
          </div>

          <div className="col-span-2 w-full flex justify-around mt-6 mb-10">
            <Button
              label="Back"
              classes="border border-black text-xl"
              onClick={props.handlePrevPage}
            />
            <Button
              label="Sign Up"
              classes="text-xl bg-black text-white"
              type="submit"
            />
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-customRed-95 min-h-full flex items-center justify-center">
        <div>
          <RentEase classes="mb-20" />
          <Description
            description="Just few more questions and we are ready to let you in"
            classes="my-16 max-w-sm"
          />
          <div className="flex justify-center px-8 mt-10">
            <Image
              src={signup3}
              alt="sign in illustration"
              priority
              width={700}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
