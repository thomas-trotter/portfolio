import type { Project } from "@/.velite";
import type { projectCategories } from "@/lib/config/project-categories";

export type ContentTag = {
  label: string;
  variant: "accent" | "muted";
};

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = "All" | ProjectCategory;
export type ProjectLink = Project["links"][number];
export type ProfileLink = { label: string; href: string };

export type BlogPostDetail = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  coverSrc?: string;
  code: string;
  tags: readonly ContentTag[];
  permalink: string;
};

export type BlogPostSummary = Pick<
  BlogPostDetail,
  "slug" | "title" | "date" | "readTime" | "excerpt" | "coverSrc" | "permalink"
>;

export type ProjectDetail = {
  slug: string;
  name: string;
  description: string;
  thumbnailSrc?: string;
  heroSrc?: string;
  tags: readonly ContentTag[];
  categories: readonly ProjectCategory[];
  featured: boolean;
  role: string;
  tools: readonly string[];
  links: readonly ProjectLink[];
  code: string;
  permalink: string;
};

export type ProjectSummary = Pick<
  ProjectDetail,
  "slug" | "name" | "description" | "tags" | "categories" | "thumbnailSrc" | "permalink"
>;

export type Experience = {
  role: string;
  company: string;
  year: string;
  description: string;
};

export type AboutPage = {
  photoSrc: string;
  location: string;
  education: string;
  availability: string;
  cvHref: string;
  skills: readonly string[];
  profileLinks: readonly ProfileLink[];
  experience: readonly Experience[];
  code: string;
};

export type ContactPage = {
  location: string;
  email: string;
  profileLinks: readonly ProfileLink[];
  code: string;
};
