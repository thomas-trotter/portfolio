import PageLayout from "@/components/layout/page-layout";
import ContactSection from "@/components/sections/contact-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch about internship opportunities, collaborations, or projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
}
