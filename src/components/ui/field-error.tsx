import classNames from "classnames";

type FieldErrorProps = {
  message: string;
  className?: string;
};

export default function FieldError({ message, className }: FieldErrorProps) {
  return (
    <p
      className={classNames(
        "-mt-2 font-mono text-[13px] text-[oklch(0.45_0.15_25)]",
        className,
      )}
    >
      {message}
    </p>
  );
}
