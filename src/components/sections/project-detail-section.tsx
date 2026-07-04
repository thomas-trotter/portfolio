import Link from "next/link";
import { MDXContent, projectMdxComponents } from "@/components/mdx";
import ContentImage from "@/components/ui/content-image";
import Section from "@/components/ui/section";
import Tag from "@/components/ui/tag";
import type { ProjectDetail } from "@/lib/content";

type ProjectDetailSectionProps = {
  project: ProjectDetail;
};

export default function ProjectDetailSection({
  project,
}: ProjectDetailSectionProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full shrink-0 border-b border-border px-8 py-8 md:sticky md:top-0 md:w-60 md:self-start md:border-b-0 md:border-r">
        <Link
          href="/projects"
          className="mb-5 block font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          ← Back to projects
        </Link>

        <p className="mb-1.5 font-mono text-xs font-semibold text-ink">Role</p>
        <p className="mb-4 text-[13px] leading-[1.7] text-ink/80">
          {project.role}
        </p>

        <p className="mb-1.5 font-mono text-xs font-semibold text-ink">
          Tools
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>

        <p className="mb-1.5 font-mono text-xs font-semibold text-ink">
          Links
        </p>
        <div className="flex flex-col gap-0.5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-accent transition-opacity hover:opacity-80"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </aside>

      <Section className="min-w-0 flex-1">
        <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
          {project.name}
        </h1>

        <ContentImage
          src={project.heroSrc}
          alt={`Hero screenshot of ${project.name}`}
          className="mb-[26px] h-[220px]"
          fallbackLabel="[ hero screenshot / demo ]"
        />

        <div className="[&>h2:not(:first-child)]:mt-[26px]">
          <MDXContent code={project.code} components={projectMdxComponents} />
        </div>

        <ContentImage
          src={project.diagramSrc}
          alt={`Diagram for ${project.name}`}
          className="mt-4 h-[160px]"
          fallbackLabel="[ diagram / screenshot ]"
        />
      </Section>
    </div>
  );
}
