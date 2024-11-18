import { forwardRef } from "react";
type FileNameTypes =
  | "drivers_license"
  | "passport"
  | "i_20"
  | "balance_statement"
  | "visa"
  | "state_id";
type TextFieldParams = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "id" | "name" | "type" | "placeholder"
> & {
  label: string;
  id: string;
  isRequired?: boolean;
  setValue: (name: FileNameTypes, value: any) => void; // react-hook-form setValue
  name: FileNameTypes; // The field name in react-hook-form
};
const FileInputField = forwardRef<HTMLInputElement, TextFieldParams>(
  ({ isRequired, setValue, name, label, id, ...inputParams }, ref) => {
    const handleFileInsert = async (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      console.log(`${name} file inserted`);
      const file = event.target.files?.[0];
      if (file) {
        // try {
        //   const uploadedUrl = await cloudinaryUpload(file);
        //   setValue(name, uploadedUrl); // Update the form value with the Cloudinary URL
        // } catch (error) {
        //   console.error("File upload failed:", error);
        // }
        setValue(name, "Safe url from cdn");
      }
    };
    return (
      <div className="flex flex-1 flex-col gap-0">
        <label htmlFor={id} className="text-primary-900">
          {label}
          <span className={`${!isRequired ? "hidden" : "inline text-red-600"}`}>
            {" "}
            *
          </span>
        </label>
        <input
          type="file"
          onChange={handleFileInsert}
          placeholder="Click to insert file"
          {...inputParams}
          ref={ref}
          className=" text-gray-700 px-3 py-2 border-gray-300 focus:border-primary-950 outline-none border-2 rounded-full file:hidden"
          id={id}
        />
      </div>
    );
  },
);

// Add a display name for easier debugging
FileInputField.displayName = "FileInput";

export default FileInputField;
