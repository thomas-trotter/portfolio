import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";
import BlogPostDetailSection from "@/components/sections/blog-post-detail-section";
import { getBlogPostBySlug } from "@/lib/content";

export { getBlogPostMetadata as generateMetadata } from "@/lib/metadata";
export { getBlogPostStaticParams as generateStaticParams } from "@/lib/static-params";

type BlogPostDetailPageProps = {
  params: Promise<{ slug: string }>;
};

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
