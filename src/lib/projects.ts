export type ProjectTag = {
  label: string;
  variant: "accent" | "muted";
};

export type ProjectCategory = "ML / AI" | "Web" | "Research";

export type ProjectFilter = "All" | ProjectCategory;

export type ProjectSummary = {
  name: string;
  description: string;
  tags: readonly ProjectTag[];
  categories: readonly ProjectCategory[];
  href?: string;
};

export const projectFilters: readonly ProjectFilter[] = [
  "All",
  "ML / AI",
  "Web",
  "Research",
];

export const allProjects: readonly ProjectSummary[] = [
  {
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [
      { label: "ML", variant: "accent" },
      { label: "Python", variant: "muted" },
    ],
    categories: ["ML / AI"],
  },
  {
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [
      { label: "Web", variant: "accent" },
      { label: "React", variant: "muted" },
    ],
    categories: ["Web"],
  },
  {
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [{ label: "Research", variant: "accent" }],
    categories: ["Research"],
  },
  {
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [{ label: "ML", variant: "accent" }],
    categories: ["ML / AI"],
  },
  {
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [{ label: "Web", variant: "accent" }],
    categories: ["Web"],
  },
  {
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [
      { label: "ML", variant: "accent" },
      { label: "Research", variant: "muted" },
    ],
    categories: ["ML / AI", "Research"],
  },
];

export const featuredProjects = allProjects.slice(0, 3);
