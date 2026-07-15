import {
  mdxImageComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const contactMdxComponents = {
  ...mdxImageComponents,
  p: mdxParagraphComponents.contactIntro,
};
