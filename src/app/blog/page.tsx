import PageLayout from "@/components/layout/page-layout";
import BlogListSection from "@/components/sections/blog-list-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description: "Notes on building software, ML systems, and this portfolio.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageLayout>
      <BlogListSection />
    </PageLayout>
  );
}
