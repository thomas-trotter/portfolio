import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/card";
import Pill from "@/components/ui/pill";
import Section from "@/components/ui/section";
import { about } from "@/lib/mocks/about";
import { site } from "@/lib/mocks/site";

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full shrink-0 border-b border-border px-8 py-8 md:sticky md:top-0 md:w-60 md:self-start md:border-b-0 md:border-r">
        <div className="relative mx-auto mb-4 aspect-square w-full max-w-[180px] overflow-hidden rounded-full bg-surface">
          <Image
            src={about.photoSrc}
            alt={`Photo of ${site.name}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 240px"
            priority
          />
        </div>

        <p className="mb-1.5 font-mono text-xs text-muted">
          📍 {about.location}
        </p>
        <p className="mb-1.5 font-mono text-xs text-muted">
          🎓 {about.education}
        </p>
        <p className="mb-[18px] font-mono text-xs text-muted">
          ✅ {about.availability}
        </p>

        {/*<Button
          variant="outline"
          href={about.cvHref}
          className="w-full px-0 py-2.5 text-[13px]"
        >
          Download CV
        </Button>
        */}
        <div className="mt-4 flex flex-wrap gap-2">
          {about.profileLinks.map((link) => (
            <Link key={link.label} href={link.href} className="tag-muted">
              {link.label}
            </Link>
          ))}
        </div>
      </aside>

      <Section className="min-w-0 flex-1">
        <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
          About me
        </h1>

        {about.intro.map((paragraph, index) => (
          <p
            key={index}
            className="mb-3.5 text-[15px] leading-[1.7] text-ink/80 last:mb-6"
          >
            {paragraph}
          </p>
        ))}

        <h2 className="mb-[18px] text-[21px] font-semibold tracking-[-0.01em]">
          Skills
        </h2>
        <div className="mb-7 flex flex-wrap gap-2.5">
          {about.skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>

        <h2 className="mb-[18px] text-[21px] font-semibold tracking-[-0.01em]">
          Experience
        </h2>
        <div className="flex flex-col gap-3">
          {about.experience.map((entry) => (
            <Card key={`${entry.company}-${entry.year}`}>
              <div className="mb-1.5 flex items-start justify-between gap-4">
                <span className="font-semibold">
                  {entry.role} · {entry.company}
                </span>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {entry.year}
                </span>
              </div>
              <p className="text-[13px] leading-[1.7] text-ink/80">
                {entry.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
