export type ProjectTag = {
  label: string;
  variant: "accent" | "muted";
};

export type ProjectSummary = {
  name: string;
  description: string;
  tags: readonly ProjectTag[];
  href?: string;
};

export const featuredProjects: readonly ProjectSummary[] = [
  {
    name: "[Project Name]",
    description: "One-line description of what this project does.",
    tags: [
      { label: "ML", variant: "accent" },
      { label: "Python", variant: "muted" },
    ],
  },
  {
    name: "[Project Name]",
    description: "One-line description of what this project does.",
    tags: [
      { label: "Web", variant: "accent" },
      { label: "React", variant: "muted" },
    ],
  },
  {
    name: "[Project Name]",
    description: "One-line description of what this project does.",
    tags: [{ label: "Research", variant: "accent" }],
  },
];
