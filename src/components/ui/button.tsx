import classNames from "classnames";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
}: ButtonProps) {
  
  const classes = classNames(
    variant === "primary" ? "btn-primary" : "btn-outline",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
