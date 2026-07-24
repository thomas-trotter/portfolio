import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";
import { projectCategories } from "@/lib/config/project-categories";
import { generateMdxModules } from "./scripts/mdx/generate-mdx-modules";

function contentSlug(filePath: string, collectionPrefix: string) {
  return filePath
    .replace(new RegExp("^" + collectionPrefix + "/"), "")
    .replace(/\/index$/, "");
}

function mdxPermalink(collection: string, slug: string) {
  return "/" + collection + "/" + slug;
}

const site = defineCollection({
  name: "Site",
  pattern: "site.yaml",
  single: true,
  schema: s.object({
    name: s.string(),
    tagline: s.string(),
    subtitle: s.string(),
    location: s.string(),
    copyrightYear: s.number(),
    skills: s.array(s.string()).default([]),
    profileLinks: s
      .array(s.object({ label: s.string(), href: s.string() }))
      .default([]),
  }),
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
        permalink: mdxPermalink("blog", slug),
        readTime:
          Math.max(1, Math.round(data.metadata.readingTime)) + " min read",
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
        permalink: mdxPermalink("projects", slug),
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
    .transform((data) => {
      const slug = contentSlug(data.slug, "pages");
      return {
        ...data,
        slug,
      };
    }),
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
  prepare: async (data, { config }) => {
    await generateMdxModules(data as Record<string, unknown>, config.output.data);
  },
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        { theme: "github-light", keepBackground: false },
      ],
    ],
    remarkPlugins: [],
  },
});
