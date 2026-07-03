import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";
import BlogPostDetailSection from "@/components/sections/blog-post-detail-section";
import { blogPosts, getBlogPostById } from "@/lib/mocks/blog";

type BlogPostDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export default async function BlogPostDetailPage({
  params: _params,
}: BlogPostDetailPageProps) {
  /*const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <BlogPostDetailSection post={post} />
    </PageLayout>
  );*/
  return notFound();
}
