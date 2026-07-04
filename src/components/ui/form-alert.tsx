import { CircleAlert } from "lucide-react";
import classNames from "classnames";

type FormAlertProps = {
  message: string;
  className?: string;
};

export default function FormAlert({ message, className }: FormAlertProps) {
  return (
    <div
      className={classNames(
        "flex items-start gap-2.5 rounded-lg border border-[oklch(0.7_0.15_25)] bg-[oklch(0.95_0.04_25)] px-3.5 py-3",
        className,
      )}
    >
      <CircleAlert
        className="size-4 shrink-0 text-[oklch(0.45_0.15_25)]"
        aria-hidden
      />
      <p className="m-0 text-[13px] leading-[1.7] text-[oklch(0.35_0.1_25)]">
        {message}
      </p>
    </div>
  );
}
