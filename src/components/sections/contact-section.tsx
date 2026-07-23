import Link from "next/link";
import { MapPin } from "lucide-react";
import { MDXContent, contactMdxComponents } from "@/components/mdx";
import ContactForm from "@/components/forms/contact-form";
import Section from "@/components/ui/section";
import { getContactPage } from "@/lib/content";

export default function ContactSection() {
  const contact = getContactPage();

  return (
    <Section>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex-1">
          <h1 className="page-title">Let&apos;s talk</h1>
          <MDXContent code={contact.code} components={contactMdxComponents} />
          <p className="mb-5.5 flex items-center gap-1.5 font-mono text-xs text-muted">
            <MapPin className="size-3 shrink-0" aria-hidden />
            {contact.location}
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
