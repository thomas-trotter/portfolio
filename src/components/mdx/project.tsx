import type { MdxComponents } from "@/components/mdx/types";

export const projectMdxComponents: MdxComponents = {
  h2: ({ children }) => (
    <h2 className="mb-[18px] text-[21px] font-semibold tracking-[-0.01em]">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="text-[15px] leading-[1.7] text-ink/80">{children}</p>
  ),
};
