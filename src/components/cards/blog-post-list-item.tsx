import Link from "next/link";
import ContentImage from "@/components/ui/content-image";
import type { BlogPostSummary } from "@/lib/content";

type BlogPostListItemProps = {
  post: BlogPostSummary;
};

export default function BlogPostListItem({ post }: BlogPostListItemProps) {
  return (
    <Link
      href={post.permalink}
      className="flex flex-col gap-5 transition-opacity hover:opacity-90 sm:flex-row"
    >
      {post.coverSrc ? (
        <ContentImage
          src={post.coverSrc}
          alt={`Cover image for ${post.title}`}
          className="h-[100px] w-full shrink-0 sm:w-[150px]"
          fallbackLabel="[ thumb ]"
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <h2 className="mb-1.5 text-lg font-semibold">{post.title}</h2>
        <p className="mb-2 font-mono text-xs text-muted">
          {post.date} · {post.readTime}
        </p>
        <p className="text-sm leading-[1.7] text-ink/80">{post.excerpt}</p>
      </div>
    </Link>
  );
}
