import { notFound } from "next/navigation";

export async function requireBySlug<T>(
  params: Promise<{ slug: string }>,
  lookup: (slug: string) => T | undefined,
): Promise<T> {
  const { slug } = await params;
  const item = lookup(slug);
  if (!item) {
    notFound();
  }
  return item;
}
