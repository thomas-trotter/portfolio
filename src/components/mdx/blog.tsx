import {
  mdxHeadingComponents,
  mdxLinkComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const blogMdxComponents = {
  ...mdxHeadingComponents,
  ...mdxLinkComponents,
  p: mdxParagraphComponents.default,
};
