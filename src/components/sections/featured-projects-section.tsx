import ProjectCard from "@/components/cards/project-card";
import Section from "@/components/ui/section";
import { featuredProjects } from "@/lib/content";

export default function FeaturedProjectsSection() {
  return (
    <Section className="pt-0">
      <h2 className="section-heading">
        Featured projects
      </h2>
      <div className="grid gap-[22px] md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
