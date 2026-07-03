import Link from "next/link";
import Card from "@/components/ui/card";
import Placeholder from "@/components/ui/placeholder";
import Tag from "@/components/ui/tag";
import type { ProjectSummary } from "@/lib/projects";

type ProjectCardProps = {
  project: ProjectSummary;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const content = (
    <>
      <Placeholder className="mb-3.5 h-[120px]">[ project screenshot ]</Placeholder>
      <h3 className="mb-1.5 font-semibold">{project.name}</h3>
      <p className="mb-2.5 text-[13px] leading-[1.7] text-ink/80">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>
    </>
  );

  if (project.href) {
    return (
      <Link href={project.href} className="block transition-opacity hover:opacity-90">
        <Card>{content}</Card>
      </Link>
    );
  }

  return <Card>{content}</Card>;
}
