import Link from "next/link";
import Section from "@/components/ui/section";
import { contact } from "@/lib/contact";

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

        <form className="flex flex-1 flex-col gap-3.5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            autoComplete="email"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="input min-h-[90px] resize-y"
          />
          <button type="submit" className="btn-primary self-start">
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
