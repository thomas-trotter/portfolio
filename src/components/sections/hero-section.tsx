import Link from "next/link";
import { site } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="px-6 pt-[72px] pb-14 text-center md:px-11">
      <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
        Hi, I&apos;m {site.name}
      </h1>
      <p className="mx-auto mb-6.5 max-w-[520px] text-base leading-relaxed text-muted">
        {site.tagline}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/projects" className="btn-primary px-[26px] py-[13px]">
          View projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg border-[1.5px] border-ink px-[26px] py-[13px] text-[15px] font-semibold text-ink transition-colors hover:bg-surface"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
