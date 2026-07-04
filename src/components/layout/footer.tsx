import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="shrink-0 flex flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-5 md:px-11">
      <span className="font-mono text-xs text-muted">
        © {site.copyrightYear} — {site.name}
      </span>
      <nav
        aria-label="Social"
        className="flex items-center gap-[30px] text-[13px] font-medium"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-ink transition-colors hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
