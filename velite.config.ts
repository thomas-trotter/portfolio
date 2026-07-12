import { defineCollection, defineConfig, s } from "velite";
import { projectCategories } from "./src/lib/config/project-categories";

export { projectCategories };

function contentSlug(path: string, collectionPrefix: string) {
  return path
    .replace(new RegExp(`^${collectionPrefix}/`), "")
    .replace(/\/index$/, "");
}

const site = defineCollection({
  name: "Site",
  pattern: "site.yaml",
  single: true,
  schema: s
    .object({
      name: s.string(),
      tagline: s.string(),
      subtitle: s.string(),
      email: s.string(),
      location: s.string(),
      copyrightYear: s.number(),
      skills: s.array(s.string()).default([]),
      profileLinks: s
        .array(s.object({ label: s.string(), href: s.string() }))
        .default([]),
    })
    .transform((data) => ({
      ...data,
      profileLinks: [
        ...data.profileLinks,
        { label: "Email", href: `mailto:${data.email}` },
      ],
    })),
});

const blog = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(),
      date: s.isodate(),
      tags: s.array(s.string()).default([]),
      featured: s.boolean().default(false),
      cover: s.image().optional(),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
      code: s.mdx(),
    })
    .transform((data) => {
      const slug = contentSlug(data.slug, "blog");
      return {
        ...data,
        slug,
        readTime: `${Math.max(1, Math.round(data.metadata.readingTime))} min read`,
        permalink: `/blog/${slug}`,
      };
    }),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      name: s.string(),
      slug: s.path(),
      description: s.string(),
      categories: s.array(s.enum(projectCategories)),
      tags: s.array(s.string()).default([]),
      featured: s.boolean().default(false),
      role: s.string(),
      tools: s.array(s.string()),
      links: s
        .array(s.object({ label: s.string(), href: s.string() }))
        .default([]),
      thumbnail: s.image().optional(),
      hero: s.image().optional(),
      code: s.mdx(),
    })
    .transform((data) => {
      const slug = contentSlug(data.slug, "projects");
      return {
        ...data,
        slug,
        permalink: `/projects/${slug}`,
      };
    }),
});

const pages = defineCollection({
  name: "Page",
  pattern: "pages/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      photoSrc: s.string().optional(),
      education: s.string().optional(),
      availability: s.string().optional(),
      cvHref: s.string().optional(),
      experience: s
        .array(
          s.object({
            role: s.string(),
            company: s.string(),
            year: s.string(),
            description: s.string(),
          }),
        )
        .default([]),
      code: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^pages\//, ""),
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    clean: true,
  },
  collections: { blog, projects, pages, site },
  mdx: { rehypePlugins: [], remarkPlugins: [] },
});
