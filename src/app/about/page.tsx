import PageLayout from "@/components/layout/page-layout";
import AboutSection from "@/components/sections/about-section";
import { getAboutPage } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: `${getAboutPage().education} — background, skills, and experience.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutSection />
    </PageLayout>
  );
}
