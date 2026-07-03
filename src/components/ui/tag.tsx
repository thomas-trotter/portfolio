import classNames from "classnames";

type TagProps = {
  variant?: "accent" | "muted";
  className?: string;
  children: React.ReactNode;
};

export default function Tag({
  variant = "accent",
  className,
  children,
}: TagProps) {
  return (
    <span
      className={classNames(
        variant === "accent" ? "tag" : "tag-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
