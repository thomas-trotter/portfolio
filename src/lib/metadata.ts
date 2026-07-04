import type { Metadata } from "next";
import { getBlogPostBySlug, getProjectBySlug } from "@/lib/content";
import { site } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const defaultTitle = `${site.name} — ML / Software Engineer`;
export const defaultDescription = site.tagline;

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ?? defaultTitle;
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: path ? { canonical: url } : undefined,
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
    },
  };
}

async function createSlugPageMetadata(
  params: Promise<{ slug: string }>,
  resolve: (slug: string) => {
    title: string;
    description: string;
    path: string;
  } | undefined,
): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) return {};
  return createPageMetadata(resolved);
}

export async function getBlogPostMetadata(
  params: Promise<{ slug: string }>,
): Promise<Metadata> {
  return createSlugPageMetadata(params, (slug) => {
    const post = getBlogPostBySlug(slug);
    if (!post) return undefined;
    return { title: post.title, description: post.excerpt, path: post.permalink };
  });
}

export async function getProjectMetadata(
  params: Promise<{ slug: string }>,
): Promise<Metadata> {
  return createSlugPageMetadata(params, (slug) => {
    const project = getProjectBySlug(slug);
    if (!project) return undefined;
    return {
      title: project.name,
      description: project.description,
      path: project.permalink,
    };
  });
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${site.name}`,
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
};
