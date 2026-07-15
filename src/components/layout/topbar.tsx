"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import NavLink from "@/components/ui/nav-link";
import { site } from "@/.velite";
import { topbarLinks } from "@/lib/config/site";

export default function TopBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

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
              <NavLink {...link} pathname={pathname} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-ink transition-colors hover:text-accent md:hidden"
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
                <NavLink
                  {...link}
                  pathname={pathname}
                  className="block"
                  onClick={closeMenu}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
