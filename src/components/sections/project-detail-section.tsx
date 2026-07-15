import { ArrowUpRight } from "lucide-react";
import { MDXContent, projectMdxComponents } from "@/components/mdx";
import BackLink from "@/components/ui/back-link";
import ContentImage from "@/components/ui/content-image";
import DetailSidebar from "@/components/ui/detail-sidebar";
import Section from "@/components/ui/section";
import Tag from "@/components/ui/tag";
import { IMAGE_SIZES } from "@/lib/config/images";
import type { ProjectDetail } from "@/lib/content";

type ProjectDetailSectionProps = {
  project: ProjectDetail;
};

export default function ProjectDetailSection({
  project,
}: ProjectDetailSectionProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <DetailSidebar>
        <BackLink href="/projects" className="mb-5">
          Back to projects
        </BackLink>

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
              className="inline-flex items-center gap-1 text-[13px] text-accent transition-opacity hover:opacity-80"
            >
              {link.label}
              <ArrowUpRight className="size-3 shrink-0" aria-hidden />
            </a>
          ))}
        </div>
      </DetailSidebar>

      <Section className="min-w-0 flex-1">
        <h1 className="page-title">{project.name}</h1>

        {project.hero ? (
          <ContentImage
            src={project.hero.src}
            width={project.hero.width}
            height={project.hero.height}
            blurDataURL={project.hero.blurDataURL}
            alt={`Hero screenshot of ${project.name}`}
            className="mb-[26px] rounded-[10px] border border-border"
            sizes={IMAGE_SIZES.projectHero}
            layout="intrinsic"
            objectFit="contain"
            priority
            fallbackLabel="[ hero screenshot / demo ]"
          />
        ) : null}

        <div className="[&>h2:not(:first-child)]:mt-[26px]">
          <MDXContent code={project.code} components={projectMdxComponents} />
        </div>
      </Section>
    </div>
  );
}
