import PageLayout from "@/components/layout/page-layout";
import ProjectsGridSection from "@/components/sections/projects-grid-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "A selection of ML and software projects I've built.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsGridSection />
    </PageLayout>
  );
}
