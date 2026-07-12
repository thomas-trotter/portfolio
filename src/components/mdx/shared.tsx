import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { MdxComponents } from "@/components/mdx/types";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/config/images";

const bodyClass = "text-[15px] leading-[1.7] text-ink/80";
const mdxLinkClass = "text-accent underline-offset-2 transition-opacity hover:opacity-80";

function createParagraph(marginClass: string) {
  return ({ children }: { children?: ReactNode }) => (
    <p className={`${marginClass} ${bodyClass}`.trim()}>{children}</p>
  );
}

export const mdxParagraphComponents = {
  default: createParagraph("mb-3.5"),
  withTrailingSection: createParagraph("mb-3.5 last:mb-6"),
  contactIntro: createParagraph("mb-6.5"),
  plain: createParagraph(""),
} satisfies MdxComponents;

export const mdxHeadingComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="section-heading">{children}</h2>
  ),
} satisfies MdxComponents;

function createMdxImageComponents(sizes: string) {
  return {
    img: ({ src, alt }: { src?: string; alt?: string }) => {
      if (!src) {
        return null;
      }

      return (
        <span className="my-6 block overflow-hidden rounded-[10px] border border-border">
          <Image
            src={src}
            alt={alt ?? ""}
            width={0}
            height={0}
            quality={IMAGE_QUALITY}
            sizes={sizes}
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </span>
      );
    },
  } satisfies MdxComponents;
}

export const mdxImageComponents = createMdxImageComponents(IMAGE_SIZES.blogMdx);

export const mdxProjectImageComponents = createMdxImageComponents(
  IMAGE_SIZES.projectMdx,
);

export const mdxLinkComponents = {
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={mdxLinkClass}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={mdxLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
} satisfies MdxComponents;
