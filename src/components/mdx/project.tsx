import {
  mdxHeadingComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const projectMdxComponents = {
  ...mdxHeadingComponents,
  p: mdxParagraphComponents.plain,
};
