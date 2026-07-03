export type BlogPostTag = {
  label: string;
  variant: "accent" | "muted";
};

export type BlogPostDetail = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: readonly string[];
  tags: readonly BlogPostTag[];
};

export type BlogPostSummary = Pick<
  BlogPostDetail,
  "id" | "title" | "date" | "readTime" | "excerpt"
>;

const placeholderBody = [
  "[Opening paragraph of the post — sets up what the reader is about to learn.]",
  "[Second paragraph continuing the thought, with more detail or a code example below.]",
  "[Closing paragraph wrapping up the post.]",
] as const;

const placeholderTags: readonly BlogPostTag[] = [
  { label: "ML", variant: "accent" },
  { label: "Notes", variant: "muted" },
];

export const blogPosts: readonly BlogPostDetail[] = [
  {
    id: "1",
    title: "[Post title goes here]",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
    body: placeholderBody,
    tags: placeholderTags,
  },
  {
    id: "2",
    title: "[Another post title]",
    date: "Dec 2, 2025",
    readTime: "6 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
    body: placeholderBody,
    tags: placeholderTags,
  },
  {
    id: "3",
    title: "[Older post title]",
    date: "Oct 20, 2025",
    readTime: "3 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
    body: placeholderBody,
    tags: placeholderTags,
  },
  {
    id: "4",
    title: "[Post title goes here]",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    excerpt: "[Short excerpt of the post content, one to two lines.]",
    body: placeholderBody,
    tags: placeholderTags,
  },
];

export const POSTS_PER_PAGE = 3;

export function getBlogPostById(id: string): BlogPostDetail | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getRelatedPosts(
  id: string,
  limit = 2,
): readonly BlogPostSummary[] {
  return blogPosts.filter((post) => post.id !== id).slice(0, limit);
}

export function blogPostHref(id: string): string {
  return `/blog/${id}`;
}
