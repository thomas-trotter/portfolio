import Button from "@/components/ui/button";
import Section from "@/components/ui/section";
import { site } from "@/lib/mocks/site";

export default function HeroSection() {
  return (
    <Section centered className="pt-[72px] pb-14">
      <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
        Hi, I&apos;m {site.name}
      </h1>
      <p className="mx-auto mb-6.5 max-w-[520px] text-base leading-relaxed text-muted">
        {site.tagline}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" href="/projects" className="px-[26px] py-[13px]">
          View projects
        </Button>
        <Button variant="outline" href="/contact">
          Contact me
        </Button>
      </div>
    </Section>
  );
}
