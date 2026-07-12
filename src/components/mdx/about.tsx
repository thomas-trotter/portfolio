import {
  mdxImageComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const aboutMdxComponents = {
  ...mdxImageComponents,
  p: mdxParagraphComponents.withTrailingSection,
};
