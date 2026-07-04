import Link from "next/link";
import classNames from "classnames";

type BackLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function BackLink({
  href,
  children,
  className,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={classNames(
        "back-link",
        className
      )}>
      {children}
    </Link>
  );
}
