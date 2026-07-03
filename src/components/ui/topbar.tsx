"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
] as const;

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
                    Thomas Trotter
                </Link>

                <ul className="hidden items-center gap-[30px] md:flex">
                    {navItems.map((navItem) => (
                        <li key={navItem.href}>
                            <Link
                                href={navItem.href}
                                className={classNames(
                                    "text-sm font-medium transition-colors",
                                    pathname === navItem.href ? "text-accent" : "text-ink hover:text-accent"
                                )}
                            >
                                {navItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}