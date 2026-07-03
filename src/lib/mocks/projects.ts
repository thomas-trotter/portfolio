export type ProjectTag = {
  label: string;
  variant: "accent" | "muted";
};

export type ProjectCategory = "ML / AI" | "Web" | "Research";

export type ProjectFilter = "All" | ProjectCategory;

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectDetail = {
  id: string;
  name: string;
  description: string;
  tags: readonly ProjectTag[];
  categories: readonly ProjectCategory[];
  role: string;
  tools: readonly string[];
  links: readonly ProjectLink[];
  overview: string;
  problemApproach: string;
};

export type ProjectSummary = Pick<
  ProjectDetail,
  "id" | "name" | "description" | "tags" | "categories"
>;

const placeholderDetail = {
  role: "[Your role]",
  tools: ["Python", "PyTorch"],
  links: [
    { label: "GitHub", href: "#" },
    { label: "Live demo", href: "#" },
  ],
  overview:
    "[What the project is, why you built it, and the outcome — 2–3 sentences.]",
  problemApproach:
    "[The problem you set out to solve and how you approached it technically.]",
} as const;

export const projectFilters: readonly ProjectFilter[] = [
  "All",
  "ML / AI",
  "Web",
  "Research",
];

export const allProjects: readonly ProjectDetail[] = [
  {
    id: "1",
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [
      { label: "ML", variant: "accent" },
      { label: "Python", variant: "muted" },
    ],
    categories: ["ML / AI"],
    ...placeholderDetail,
  },
  {
    id: "2",
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [
      { label: "Web", variant: "accent" },
      { label: "React", variant: "muted" },
    ],
    categories: ["Web"],
    ...placeholderDetail,
    tools: ["React", "TypeScript"],
  },
  {
    id: "3",
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [{ label: "Research", variant: "accent" }],
    categories: ["Research"],
    ...placeholderDetail,
    tools: ["Python"],
  },
  {
    id: "4",
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [{ label: "ML", variant: "accent" }],
    categories: ["ML / AI"],
    ...placeholderDetail,
  },
  {
    id: "5",
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [{ label: "Web", variant: "accent" }],
    categories: ["Web"],
    ...placeholderDetail,
    tools: ["React"],
  },
  {
    id: "6",
    name: "[Project Name]",
    description: "Short description of the project.",
    tags: [
      { label: "ML", variant: "accent" },
      { label: "Research", variant: "muted" },
    ],
    categories: ["ML / AI", "Research"],
    ...placeholderDetail,
  },
];

export const featuredProjects = allProjects.slice(0, 3);

export function getProjectById(id: string): ProjectDetail | undefined {
  return allProjects.find((project) => project.id === id);
}

export function projectHref(id: string): string {
  return `/projects/${id}`;
}
