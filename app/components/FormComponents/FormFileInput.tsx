import { personSchema } from "@/validations/zodSchemas/personSchema";
import { useState } from "react";
import { TiDocumentText } from "react-icons/ti";
import { z } from "zod";

type FormData = z.infer<typeof personSchema>;

type FieldName = keyof FormData;

export default function FormFileInput({
  label,
  id,
  isRequired,
  placeholder,
  name,
  setValue,
  error,
}: {
  label: string;
  id: string;
  name: FieldName;
  isRequired?: boolean;
  placeholder: string;
  error?: string;
  setValue: (name: FieldName, value: string) => void;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    setFileName(file.name);
    setIsUploading(true);
    setValue(name, "Url to be obtained later");
    setIsUploading(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-primary-900 text-md">
        {label}
        <span className={`${isRequired ? "hidden" : "inline text-red-600"}`}>
          {" "}
          *
        </span>
      </label>
      <div className="flex items-center gap-6 ">
        <label className="" htmlFor={id}>
          <div className="text-secondary-70 flex items-center border-2 rounded-xl w-fit px-5">
            <span className="text-4xl text-secondary-80">
              <TiDocumentText />
            </span>
            <span className="text-md">
              {isUploading ? "Uploading ..." : fileName || placeholder}
            </span>
          </div>
        </label>
        <label
          htmlFor={id}
          className="border rounded-xl px-3 font-semibold cursor-pointer py-1.5 border-primary-10 text-primary-10"
        >
          <div>Browse</div>
        </label>
      </div>
      <input type="file" onChange={handleFileInput} id={id} hidden />
      {error && <p className="text-customRed-70">{error}</p>}
    </div>
  );
}
