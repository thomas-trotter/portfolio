export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  href?: string;
};

export const blogPosts: readonly BlogPostSummary[] = [
  {
    slug: "post-title-goes-here",
    title: "[Post title goes here]",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
  },
  {
    slug: "another-post-title",
    title: "[Another post title]",
    date: "Dec 2, 2025",
    readTime: "6 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
  },
  {
    slug: "older-post-title",
    title: "[Older post title]",
    date: "Oct 20, 2025",
    readTime: "3 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
  },
  {
    slug: "making-sense-of-complex-data",
    title: "[Post title goes here]",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
  }
];

export const POSTS_PER_PAGE = 3;
