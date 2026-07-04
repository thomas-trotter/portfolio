import { blog, pages, projects, type Blog, type Page, type Project } from "@/.velite";
import { email, profileLinks, skills } from "@/lib/constants";
import { projectCategories } from "@/lib/project-categories";

const PLACEHOLDER_IMAGE = "/placeholder.svg";

export type ContentTag = {
  label: string;
  variant: "accent" | "muted";
};

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = "All" | ProjectCategory;

export type ProjectLink = Project["links"][number];

export type BlogPostDetail = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  coverSrc: string;
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
  thumbnailSrc: string;
  heroSrc: string;
  diagramSrc: string;
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
  profileLinks: readonly { label: string; href: string }[];
  experience: readonly Experience[];
  code: string;
};

export type ContactPage = {
  location: string;
  email: string;
  profileLinks: readonly { label: string; href: string }[];
  code: string;
};

export const POSTS_PER_PAGE = 3;

export const projectFilters: readonly ProjectFilter[] = [
  "All",
  ...projectCategories,
];

function formatDisplayDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function mapTags(tags: readonly string[]): readonly ContentTag[] {
  return tags.map((label, index) => ({
    label,
    variant: index === 0 ? "accent" : "muted",
  }));
}

function mapBlogPost(post: Blog): BlogPostDetail {
  return {
    slug: post.slug,
    title: post.title,
    date: formatDisplayDate(post.date),
    readTime: post.readTime,
    excerpt: post.excerpt,
    coverSrc: PLACEHOLDER_IMAGE,
    code: post.code,
    tags: mapTags(post.tags),
    permalink: post.permalink,
  };
}

function mapProject(project: Project): ProjectDetail {
  return {
    slug: project.slug,
    name: project.name,
    description: project.description,
    thumbnailSrc: PLACEHOLDER_IMAGE,
    heroSrc: PLACEHOLDER_IMAGE,
    diagramSrc: PLACEHOLDER_IMAGE,
    tags: mapTags(project.tags),
    categories: project.categories,
    featured: project.featured,
    role: project.role,
    tools: project.tools,
    links: project.links,
    code: project.code,
    permalink: project.permalink,
  };
}

function mapAboutPage(page: Page): AboutPage {
  return {
    photoSrc: page.photoSrc ?? "/headshot.png",
    location: page.location ?? "",
    education: page.education ?? "",
    availability: page.availability ?? "",
    cvHref: page.cvHref ?? "",
    skills,
    profileLinks,
    experience: page.experience,
    code: page.code,
  };
}

function mapContactPage(page: Page): ContactPage {
  return {
    location: page.location ?? "",
    email,
    profileLinks,
    code: page.code,
  };
}

function getPageBySlug(slug: string): Page | undefined {
  return pages.find((page) => page.slug === slug);
}

export const blogPosts: readonly BlogPostDetail[] = [...blog]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map(mapBlogPost);

export const allProjects: readonly ProjectDetail[] = projects.map(mapProject);

export const featuredProjects = allProjects
  .filter((project) => project.featured)
  .slice(0, 3);

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  slug: string,
  limit = 2,
): readonly BlogPostSummary[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getAboutPage(): AboutPage {
  const page = getPageBySlug("about");
  if (!page) {
    throw new Error("About page content not found.");
  }
  return mapAboutPage(page);
}

export function getContactPage(): ContactPage {
  const page = getPageBySlug("contact");
  if (!page) {
    throw new Error("Contact page content not found.");
  }
  return mapContactPage(page);
}
