import type { Metadata } from "next";
import PageLayout from "@/components/layout/page-layout";
import ProjectDetailSection from "@/components/sections/project-detail-section";
import { getProjectBySlug } from "@/lib/content";
import { requireBySlug } from "@/lib/routing/slug-page";
import { getProjectMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return getProjectMetadata(props.params);
}
export { getProjectStaticParams as generateStaticParams } from "@/lib/seo/static-params";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const project = await requireBySlug(params, getProjectBySlug);

  return (
    <PageLayout>
      <ProjectDetailSection project={project} />
    </PageLayout>
  );
}
