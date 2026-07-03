import classNames from "classnames";

type PillProps = {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Pill({ active = false, className, children }: PillProps) {
  return (
    <span
      className={classNames(
        "pill",
        active && "pill-active",
        className,
      )}
    >
      {children}
    </span>
  );
}
