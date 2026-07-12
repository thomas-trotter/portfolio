import classNames from "classnames";
import FieldError from "@/components/ui/field-error";

type FormFieldProps = {
  name: string;
  label: string;
  type?: "text" | "email";
  placeholder: string;
  defaultValue?: string;
  error?: string[];
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
};

export default function FormField({
  name,
  label,
  type = "text",
  placeholder,
  defaultValue,
  error,
  autoComplete,
  multiline = false,
  rows = 4,
}: FormFieldProps) {
  const hasError = Boolean(error?.length);
  const errorId = `${name}-error`;
  const inputClassName = classNames("input", {
    "border-error-strong": hasError,
    "min-h-[90px] resize-y": multiline,
  });

  const sharedInputProps = {
    id: name,
    name,
    placeholder,
    defaultValue,
    className: inputClassName,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
  };

  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      {multiline ? (
        <textarea {...sharedInputProps} rows={rows} />
      ) : (
        <input
          {...sharedInputProps}
          type={type}
          autoComplete={autoComplete}
        />
      )}
      {hasError && <FieldError id={errorId} message={error![0]} />}
    </>
  );
}
