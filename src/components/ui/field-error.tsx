import classNames from "classnames";

type FieldErrorProps = {
  id?: string;
  message: string;
  className?: string;
};

export default function FieldError({ id, message, className }: FieldErrorProps) {
  return (
    <p
      id={id}
      role="alert"
      className={classNames(
        "-mt-2 font-mono text-[13px] text-error",
        className,
      )}
    >
      {message}
    </p>
  );
}
