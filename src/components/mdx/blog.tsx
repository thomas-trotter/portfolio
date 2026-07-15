import {
  mdxHeadingComponents,
  mdxImageComponents,
  mdxLinkComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const blogMdxComponents = {
  ...mdxHeadingComponents,
  ...mdxLinkComponents,
  ...mdxImageComponents,
  p: mdxParagraphComponents.default,
};
