import Link from "next/link";
import classNames from "classnames";

type NavLinkProps = {
    href: string;
    label: string;
    pathname: string;
    className?: string;
}

export default function NavLink({
    href,
    label,
    pathname,
    className,
  }: NavLinkProps) {  
    return (
      <Link
        href={href}
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
  