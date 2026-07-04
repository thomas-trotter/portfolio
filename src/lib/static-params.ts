import { allProjects, blogPosts } from "@/lib/content";

function toSlugParams(items: readonly { slug: string }[]) {
  return items.map(({ slug }) => ({ slug }));
}

export function getBlogPostStaticParams() {
  return toSlugParams(blogPosts);
}

export function getProjectStaticParams() {
  return toSlugParams(allProjects);
}
