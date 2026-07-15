import {
  mdxHeadingComponents,
  mdxProjectImageComponents,
  mdxParagraphComponents,
} from "@/components/mdx/shared";

export const projectMdxComponents = {
  ...mdxHeadingComponents,
  ...mdxProjectImageComponents,
  p: mdxParagraphComponents.plain,
};
