import PageLayout from "@/components/layout/page-layout";
import AboutSection from "@/components/sections/about-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "MSci AI student at King's College London — background, skills, and experience.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutSection />
    </PageLayout>
  );
}
