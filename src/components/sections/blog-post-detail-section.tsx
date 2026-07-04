import Link from "next/link";
import { MDXContent, blogMdxComponents } from "@/components/mdx";
import BackLink from "@/components/ui/back-link";
import ContentImage from "@/components/ui/content-image";
import Section from "@/components/ui/section";
import Tag from "@/components/ui/tag";
import {
  getAboutPage,
  getRelatedPosts,
  type BlogPostDetail,
} from "@/lib/content";
import { site } from "@/lib/site";

type BlogPostDetailSectionProps = {
  post: BlogPostDetail;
};

export default function BlogPostDetailSection({
  post,
}: BlogPostDetailSectionProps) {
  const relatedPosts = getRelatedPosts(post.slug);
  const about = getAboutPage();

  return (
    <Section className="mx-auto max-w-[600px]">
      <BackLink href="/blog" className="mb-[18px]">
        ← Back to blog
      </BackLink>

      <h1 className="page-title">{post.title}</h1>

      <p className="mb-6 font-mono text-xs text-muted">
        {post.date} · {post.readTime}
      </p>

      <ContentImage
        src={post.coverSrc}
        alt={`Cover image for ${post.title}`}
        className="mb-6 h-[220px]"
        fallbackLabel="[ cover image ]"
      />

      <MDXContent code={post.code} components={blogMdxComponents} />

      <div className="mb-[26px] mt-1 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>

      <div className="mb-8 flex gap-3.5 border-t border-border pt-[22px]">
        <ContentImage
          src={about.photoSrc}
          alt={`Photo of ${site.name}`}
          className="h-[46px] w-[46px] shrink-0 rounded-full"
          fallbackLabel="me"
        />
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="font-mono text-xs text-muted">MSci AI student</p>
        </div>
      </div>

      <h2 className="section-heading">More posts</h2>
      <div className="flex gap-[26px]">
        {relatedPosts.map((relatedPost) => (
          <Link
            key={relatedPost.slug}
            href={relatedPost.permalink}
            className="min-w-0 flex-1 transition-opacity hover:opacity-90"
          >
            <ContentImage
              src={relatedPost.coverSrc}
              alt={`Cover image for ${relatedPost.title}`}
              className="mb-2 h-20"
              fallbackLabel="[ thumb ]"
            />
            <p className="text-sm font-semibold">{relatedPost.title}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
