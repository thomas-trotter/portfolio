import PageLayout from "@/components/layout/page-layout";
import BlogPostDetailSection from "@/components/sections/blog-post-detail-section";
import { getBlogPostBySlug } from "@/lib/content";
import { requireBySlug } from "@/lib/routing/slug-page";

export { getBlogPostMetadata as generateMetadata } from "@/lib/seo/metadata";
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
