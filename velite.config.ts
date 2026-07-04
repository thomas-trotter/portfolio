import { defineCollection, defineConfig, s } from "velite";
import { projectCategories } from "./src/lib/project-categories";

export { projectCategories };

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
      excerpt: s.excerpt(),
      metadata: s.metadata(),
      code: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^blog\//, ""),
      readTime: `${Math.max(1, Math.round(data.metadata.readingTime))} min read`,
      permalink: `/blog/${data.slug.replace(/^blog\//, "")}`,
    })),
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
      code: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^projects\//, ""),
      permalink: `/projects/${data.slug.replace(/^projects\//, "")}`,
    })),
});

const pages = defineCollection({
  name: "Page",
  pattern: "pages/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      photoSrc: s.string().optional(),
      location: s.string().optional(),
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
  collections: { blog, projects, pages },
  mdx: { rehypePlugins: [], remarkPlugins: [] },
});
