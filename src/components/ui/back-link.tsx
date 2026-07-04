import Link from "next/link";
import classNames from "classnames";
import { ArrowLeft } from "lucide-react";

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
        "back-link inline-flex items-center gap-1",
        className
      )}
    >
      <ArrowLeft className="size-3 shrink-0" aria-hidden />
      {children}
    </Link>
  );
}
