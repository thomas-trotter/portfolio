import Link from "next/link";
import Card from "@/components/ui/card";
import ContentImage from "@/components/ui/content-image";
import Tag from "@/components/ui/tag";
import type { ProjectSummary } from "@/lib/content";

type ProjectCardProps = {
  project: ProjectSummary;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={project.permalink}
      className="block transition-opacity hover:opacity-90"
    >
      <Card>
        <ContentImage
          src={project.thumbnailSrc}
          alt={`Screenshot of ${project.name}`}
          className="mb-3.5 h-[120px]"
          fallbackLabel="[ project screenshot ]"
        />
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
      </Card>
    </Link>
  );
}
