const RUNTIME_ARGS_PATTERN = /^const\{([^}]+)\}=arguments\[0\];/;

export function wrapMdxCode(code: string): string {
  if (!RUNTIME_ARGS_PATTERN.test(code)) {
    throw new Error("Unexpected Velite MDX code format.");
  }

  const body = code.replace(RUNTIME_ARGS_PATTERN, "const{$1}=runtime;");

  return `// @ts-nocheck
import * as runtime from "react/jsx-runtime";
import type { ComponentType } from "react";
import type { MdxComponents } from "@/components/mdx/types";

function compileMdxModule(runtime: typeof import("react/jsx-runtime")) {
  ${body}
}

const mdxModule = compileMdxModule(runtime);
const MDXComponent = mdxModule.default as ComponentType<{ components?: MdxComponents }>;

export default MDXComponent;
`;
}
