import {
  mdxHeadingComponents,
  mdxImageComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const projectMdxComponents = {
  ...mdxHeadingComponents,
  ...mdxImageComponents,
  p: mdxParagraphComponents.plain,
};
