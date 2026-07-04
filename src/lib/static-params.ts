import { allProjects, blogPosts } from "@/lib/content";

export function getBlogPostStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function getProjectStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}
