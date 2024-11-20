import { forwardRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

type DropDownInputs =
  | "emergency_contact.state"
  | "emergency_contact.region"
  | "prev_landlord.state"
  | "prev_landlord.region"
  | "salary_range";

type DropDownTypes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "name"
> & {
  name: DropDownInputs;
  setValue: (name: DropDownInputs, value: string) => void;
  watch: (name: DropDownInputs) => string | boolean;
  options: string[];
  label: string;
  error?: string;
};

const DropDownMenu = forwardRef<HTMLInputElement, DropDownTypes>(
  (
    { label, options, setValue, watch, name, ...inputProps }: DropDownTypes,
    ref,
  ) => {
    const [active, setActive] = useState(false);
    const value = watch(name) || "Select Your Option";

    return (
      <div className="flex-1 flex flex-col gap-2 min-w-[20.5rem] w-full">
        <p className="text-primary-950 md:text-lg text:md">{label}</p>
        <div className="relative">
          <div
            onClick={() => {
              setActive(!active);
            }}
            className="flex gap-2 px-3 w-full py-2 cursor-pointer border-2 border-gray-300 rounded-xl
                    text-gray-700 bg-white items-center"
          >
            <span className="flex-1">{value}</span>
            <span
              className={`text-gray-700 ${active ? "rotate-180" : ""} transition-all`}
            >
              <RiArrowDownSLine />
            </span>
          </div>
          <div
            className={`bg-white rounded-xl mt-2 z-10 absolute w-full top-10 shadow-gray-300 transition-all
shadow-md flex-col flex gap-1 ${!active ? "hidden" : "block"}`}
          >
            {options.map((option, idx: number) => {
              return (
                <p
                  key={idx}
                  onClick={() => {
                    setActive(false);
                    setValue(name, option);
                  }}
                  className="cursor-pointer rounded-xl text-gray-700 hover:bg-gray-200 px-3 py-2"
                >
                  {option}
                </p>
              );
            })}
          </div>
        </div>
        <input ref={ref} type="hidden" {...inputProps} />{" "}
        {/* Registering the hidden input */}
      </div>
    );
  },
);

DropDownMenu.displayName = "CustomDropDown";

export default DropDownMenu;
