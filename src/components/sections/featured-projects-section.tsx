import ProjectCard from "@/components/cards/project-card";
import Section from "@/components/ui/section";
import { featuredProjects } from "@/lib/mocks/projects";

export default function FeaturedProjectsSection() {
  return (
    <Section className="pt-0">
      <h2 className="mb-[18px] text-[21px] font-semibold tracking-[-0.01em]">
        Featured projects
      </h2>
      <div className="grid gap-[22px] md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
