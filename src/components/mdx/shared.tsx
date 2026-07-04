import type { ReactNode } from "react";
import type { MdxComponents } from "@/components/mdx/types";

const bodyClass = "text-[15px] leading-[1.7] text-ink/80";

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
