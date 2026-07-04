import { blog, pages, projects, site, type Blog, type Page, type Project } from "@/.velite";
import { projectCategories } from "@/lib/project-categories";
import type {
  AboutPage,
  BlogPostDetail,
  BlogPostSummary,
  ContactPage,
  ContentTag,
  ProjectDetail,
  ProjectFilter,
  ProjectSummary,
} from "@/lib/content/types";

export type {
  AboutPage,
  BlogPostDetail,
  BlogPostSummary,
  ContactPage,
  ContentTag,
  Experience,
  ProfileLink,
  ProjectCategory,
  ProjectDetail,
  ProjectFilter,
  ProjectLink,
  ProjectSummary,
} from "@/lib/content/types";

export const POSTS_PER_PAGE = 3;
export const projectFilters: readonly ProjectFilter[] = [
  "All",
  ...projectCategories,
];

const PLACEHOLDER_IMAGE = "/placeholder.svg";
const DEFAULT_HEADSHOT = "/headshot.png";

function formatDisplayDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function mapTags(tags: readonly string[]): ContentTag[] {
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
    photoSrc: page.photoSrc ?? DEFAULT_HEADSHOT,
    location: site.location,
    education: page.education ?? "",
    availability: page.availability ?? "",
    cvHref: page.cvHref ?? "",
    skills: site.skills,
    profileLinks: site.profileLinks,
    experience: page.experience,
    code: page.code,
  };
}

function mapContactPage(page: Page): ContactPage {
  return {
    location: site.location,
    email: site.email,
    profileLinks: site.profileLinks,
    code: page.code,
  };
}

function getPageBySlug(slug: string): Page | undefined {
  return pages.find((page) => page.slug === slug);
}

function requirePage(slug: string): Page {
  const page = getPageBySlug(slug);
  if (!page) {
    throw new Error(`${slug} page content not found.`);
  }
  return page;
}

export const blogPosts = [...blog]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map(mapBlogPost);

export const allProjects = projects.map(mapProject);

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
  return mapAboutPage(requirePage("about"));
}

export function getContactPage(): ContactPage {
  return mapContactPage(requirePage("contact"));
}
