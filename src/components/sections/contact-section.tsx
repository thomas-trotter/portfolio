import Link from "next/link";
import Section from "@/components/ui/section";
import ContactForm from "@/components/forms/contact-form";

import { contact } from "@/lib/mocks/contact";

export default function ContactSection() {
  return (
    <Section>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            Let&apos;s talk
          </h1>
          <p className="mb-6.5 text-[15px] leading-[1.7] text-ink/80">
            {contact.intro}
          </p>
          <p className="mb-2 font-mono text-xs text-muted">
            📧{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-ink transition-colors hover:text-accent"
            >
              {contact.email}
            </a>
          </p>
          <p className="mb-5.5 font-mono text-xs text-muted">
            📍 {contact.location}
          </p>
          <div className="flex flex-wrap gap-2">
            {contact.profileLinks.map((link) => (
              <Link key={link.label} href={link.href} className="tag-muted">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
