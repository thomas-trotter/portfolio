import Link from "next/link";
import Placeholder from "@/components/ui/placeholder";
import Section from "@/components/ui/section";
import Tag from "@/components/ui/tag";
import {
  blogPostHref,
  getRelatedPosts,
  type BlogPostDetail,
} from "@/lib/mocks/blog";
import { site } from "@/lib/mocks/site";

type BlogPostDetailSectionProps = {
  post: BlogPostDetail;
};

export default function BlogPostDetailSection({
  post,
}: BlogPostDetailSectionProps) {
  const relatedPosts = getRelatedPosts(post.id);

  return (
    <Section className="mx-auto max-w-[600px]">
      <Link
        href="/blog"
        className="mb-[18px] block font-mono text-xs text-muted transition-colors hover:text-ink"
      >
        ← Back to blog
      </Link>

      <h1 className="mb-3.5 text-[2.375rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
        {post.title}
      </h1>

      <p className="mb-6 font-mono text-xs text-muted">
        {post.date} · {post.readTime}
      </p>

      <Placeholder className="mb-6 h-[220px]">[ cover image ]</Placeholder>

      {post.body.map((paragraph, index) => (
        <div key={index}>
          <p className="mb-3.5 text-[15px] leading-[1.7] text-ink/80">
            {paragraph}
          </p>
          {index === 1 && (
            <Placeholder className="my-[18px] h-[130px]">
              [ inline image / code block ]
            </Placeholder>
          )}
        </div>
      ))}

      <div className="mb-[26px] mt-1 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>

      <div className="mb-8 flex gap-3.5 border-t border-border pt-[22px]">
        <Placeholder className="h-[46px] w-[46px] shrink-0 rounded-full">
          me
        </Placeholder>
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="font-mono text-xs text-muted">MSci AI student</p>
        </div>
      </div>

      <h2 className="mb-[18px] text-[21px] font-semibold tracking-[-0.01em]">
        More posts
      </h2>
      <div className="flex gap-[26px]">
        {relatedPosts.map((relatedPost) => (
          <Link
            key={relatedPost.id}
            href={blogPostHref(relatedPost.id)}
            className="min-w-0 flex-1 transition-opacity hover:opacity-90"
          >
            <Placeholder className="mb-2 h-20">[ thumb ]</Placeholder>
            <p className="text-sm font-semibold">{relatedPost.title}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
