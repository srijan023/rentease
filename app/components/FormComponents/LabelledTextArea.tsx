import { forwardRef } from "react";

type TextAreaParams = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className" | "id" | "name"
> & {
  id: string;
  error?: string;
};
const LabelledTextArea = forwardRef<HTMLTextAreaElement, TextAreaParams>(
  ({ id, error, ...inputParams }, ref) => {
    return (
      <div className="flex flex-1 flex-col gap-2">
        <textarea
          {...inputParams}
          ref={ref}
          className="resize-none text-gray-700 px-3 py-2 border-gray-300 focus:border-primary-950 outline-none border-2 rounded-xl"
          required
          id={id}
        />

        {error && <p className="text-customRed-40">{error}</p>}
      </div>
    );
  },
);

// Add a display name for easier debugging
LabelledTextArea.displayName = "TextArea";

export default LabelledTextArea;
