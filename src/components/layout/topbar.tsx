"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { topbarLinks, site } from "@/lib/site";

export default function TopBar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false);
    }, [pathname])

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

                {/* Desktop navigation */}
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

                {/* Mobile navigation */}
                <button
                    type="button"
                    className="md:hidden rounded-lg p-2 text-ink transition-colors hover:text-accent"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </nav>

            {open && (
                <div
                id="mobile-nav"
                className="border-t border-border px-6 py-4 md:hidden"
              >
                <ul className="flex flex-col gap-4">
                  {topbarLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={classNames(
                          "block text-sm font-medium transition-colors",
                          pathname === link.href ? "text-accent" : "text-ink hover:text-accent",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </header>
    );
}