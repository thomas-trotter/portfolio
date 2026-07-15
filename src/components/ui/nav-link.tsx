import Link from "next/link";
import classNames from "classnames";

type NavLinkProps = {
  href: string;
  label: string;
  pathname: string;
  className?: string;
  onClick?: () => void;
};

export default function NavLink({
  href,
  label,
  pathname,
  className,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(
        "text-sm font-medium transition-colors",
        pathname === href ? "text-accent" : "text-ink hover:text-accent",
        className,
      )}
    >
      {label}
    </Link>
  );
}
