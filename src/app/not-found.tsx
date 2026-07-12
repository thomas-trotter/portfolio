import Link from "next/link";
import PageLayout from "@/components/layout/page-layout";
import Section from "@/components/ui/section";

export default function NotFound() {
  return (
    <PageLayout>
      <Section className="mx-auto max-w-[600px] text-center">
        <h1 className="page-title">Page not found</h1>
        <p className="mb-7 text-base leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn-primary">
          Back home
        </Link>
      </Section>
    </PageLayout>
  );
}
