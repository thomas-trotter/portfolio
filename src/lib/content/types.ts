import type { Project } from "@/.velite";
import type { CompiledMdxComponent } from "@/.velite/mdx/registry";
import type { projectCategories } from "@/lib/config/project-categories";

export type ContentTag = {
  label: string;
  variant: "accent" | "muted";
};

export type ContentImageAsset = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
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
  cover?: ContentImageAsset;
  MdxComponent: CompiledMdxComponent;
  tags: readonly ContentTag[];
  permalink: string;
};

export type BlogPostSummary = Pick<
  BlogPostDetail,
  "slug" | "title" | "date" | "readTime" | "excerpt" | "cover" | "permalink"
>;

export type ProjectDetail = {
  slug: string;
  name: string;
  description: string;
  thumbnail?: ContentImageAsset;
  hero?: ContentImageAsset;
  tags: readonly ContentTag[];
  categories: readonly ProjectCategory[];
  featured: boolean;
  role: string;
  tools: readonly string[];
  links: readonly ProjectLink[];
  MdxComponent: CompiledMdxComponent;
  permalink: string;
};

export type ProjectSummary = Pick<
  ProjectDetail,
  "slug" | "name" | "description" | "tags" | "categories" | "thumbnail" | "permalink"
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
  MdxComponent: CompiledMdxComponent;
};

export type ContactPage = {
  location: string;
  profileLinks: readonly ProfileLink[];
  MdxComponent: CompiledMdxComponent;
};
