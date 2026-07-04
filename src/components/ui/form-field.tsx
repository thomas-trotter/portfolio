import classNames from "classnames";
import FieldError from "@/components/ui/field-error";

type FormFieldProps = {
  name: string;
  type?: "text" | "email";
  placeholder: string;
  error?: string[];
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
};

export default function FormField({
  name,
  type = "text",
  placeholder,
  error,
  autoComplete,
  multiline = false,
  rows = 4,
}: FormFieldProps) {
  
  const hasError = Boolean(error?.length);
  const inputClassName = classNames(
    "input", {
    "border-[oklch(0.55_0.18_25)]": hasError,
    "min-h-[90px] resize-y": multiline,
  });

  return (
    <>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          className={inputClassName}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={inputClassName}
          autoComplete={autoComplete}
        />
      )}
      {hasError && <FieldError message={error![0]} />}
    </>
  );
}
