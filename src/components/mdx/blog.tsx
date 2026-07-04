import type { MdxComponents } from "@/components/mdx/types";

export const blogMdxComponents: MdxComponents = {
  p: ({ children }) => (
    <p className="mb-3.5 text-[15px] leading-[1.7] text-ink/80">{children}</p>
  ),
};
