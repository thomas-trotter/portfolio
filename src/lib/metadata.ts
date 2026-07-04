import type { Metadata } from "next";
import { getBlogPostBySlug, getProjectBySlug } from "@/lib/content";
import { site, siteUrl } from "@/lib/site";

export const defaultTitle = `${site.name} — ML / Software Engineer`;
export const defaultDescription = site.tagline;

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

type SlugMetadata = {
  title: string;
  description: string;
  path: string;
};

function buildSocialMetadata(title: string, description: string, url?: string) {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_GB" as const,
      type: "website" as const,
    },
    twitter: {
      card: "summary" as const,
      title,
      description,
    },
  };
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "",
}: PageMetadataInput = {}): Metadata {
  const pageTitle = title ?? defaultTitle;
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: path ? { canonical: url } : undefined,
    ...buildSocialMetadata(pageTitle, description, url),
  };
}

async function createSlugPageMetadata(
  params: Promise<{ slug: string }>,
  resolve: (slug: string) => SlugMetadata | undefined,
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
    return {
      title: post.title,
      description: post.excerpt,
      path: post.permalink,
    };
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
  ...buildSocialMetadata(defaultTitle, defaultDescription),
};
