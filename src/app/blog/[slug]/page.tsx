import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";
import BlogPostDetailSection from "@/components/sections/blog-post-detail-section";
import { blogPosts, getBlogPostBySlug } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

type BlogPostDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: post.permalink,
  });
}

export default async function BlogPostDetailPage({
  params,
}: BlogPostDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <BlogPostDetailSection post={post} />
    </PageLayout>
  );
}
