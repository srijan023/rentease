import { forwardRef } from "react";

type TextFieldParams = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "id" | "name"
> & {
  label: string;
  id: string;
  isRequired?: boolean;
  error?: string;
};
const LabelledInput = forwardRef<HTMLInputElement, TextFieldParams>(
  ({ isRequired, label, id, error, ...inputParams }, ref) => {
    return (
      <div className="flex flex-1 flex-col gap-2">
        <label htmlFor={id} className="text-primary-900 text-md">
          {label}
          <span className={`${isRequired ? "hidden" : "inline text-red-600"}`}>
            {" "}
            *
          </span>
        </label>
        <input
          {...inputParams}
          ref={ref}
          className={`text-gray-700 px-3 py-2 ${error ? "border-customRed-70" : "border-gray-300"} focus:border-primary-950 outline-none border-2 rounded-xl`}
          id={id}
        />
        {error && <p className="text-customRed-40">{error}</p>}
      </div>
    );
  },
);

// Add a display name for easier debugging
LabelledInput.displayName = "FileInput";

export default LabelledInput;
