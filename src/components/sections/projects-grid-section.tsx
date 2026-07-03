"use client";

import { useMemo, useState } from "react";
import classNames from "classnames";
import ProjectCard from "@/components/cards/project-card";
import Section from "@/components/ui/section";
import {
  allProjects,
  projectFilters,
  type ProjectFilter,
} from "@/lib/mocks/projects";

export default function ProjectsGridSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    return activeFilter === "All" ? allProjects : allProjects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <Section>
      <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
        Projects
      </h1>
      <p className="mb-6.5 text-base leading-relaxed text-muted">
        A selection of things I&apos;ve built.
      </p>

      <div className="mb-7 flex flex-wrap gap-2.5">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={classNames(
              "pill cursor-pointer transition-colors",
              activeFilter === filter && "pill-active",
            )}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-[22px] md:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
