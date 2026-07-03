import type { Metadata } from "next";
import { site } from "@/lib/mocks/site";

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
