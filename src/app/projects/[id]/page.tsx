import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";
import ProjectDetailSection from "@/components/sections/project-detail-section";
import { allProjects, getProjectById } from "@/lib/mocks/projects";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({
  params: _params,
}: ProjectDetailPageProps) {
  /*const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <ProjectDetailSection project={project} />
    </PageLayout>
  );*/
  return notFound();
}
