import type { Metadata } from "next";
import PageLayout from "@/components/layout/page-layout";
import BlogPostDetailSection from "@/components/sections/blog-post-detail-section";
import { getBlogPostBySlug } from "@/lib/content";
import { requireBySlug } from "@/lib/routing/slug-page";
import { getBlogPostMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return getBlogPostMetadata(props.params);
}
export { getBlogPostStaticParams as generateStaticParams } from "@/lib/seo/static-params";

type BlogPostDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostDetailPage({
  params,
}: BlogPostDetailPageProps) {
  const post = await requireBySlug(params, getBlogPostBySlug);

  return (
    <PageLayout>
      <BlogPostDetailSection post={post} />
    </PageLayout>
  );
}
