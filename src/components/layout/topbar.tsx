"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { topbarLinks, site } from "@/lib/site";

export default function TopBar() {

    const pathname = usePathname();

    return (
        <header className="border-b border-border bg-background">
            <nav
                aria-label="Main"
                className="flex items-center justify-between px-6 py-[22px] md:px-11"
            >
                <Link
                    href="/"
                    className="text-xl font-bold tracking-[-0.02em] text-ink"
                >
                    {site.name}
                </Link>

                <ul className="hidden items-center gap-[30px] md:flex">
                    {topbarLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={classNames(
                                    "text-sm font-medium transition-colors",
                                    pathname === link.href ? "text-accent" : "text-ink hover:text-accent"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}