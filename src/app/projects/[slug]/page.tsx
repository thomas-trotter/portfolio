import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";
import ProjectDetailSection from "@/components/sections/project-detail-section";
import { allProjects, getProjectBySlug } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    title: project.name,
    description: project.description,
    path: project.permalink,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <ProjectDetailSection project={project} />
    </PageLayout>
  );
}
