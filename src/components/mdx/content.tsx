import type { ComponentType } from "react";
import * as runtime from "react/jsx-runtime";
import type { MdxComponents } from "@/components/mdx/types";

const sharedComponents: Record<string, ComponentType> = {};
const mdxComponentCache = new Map<string, ComponentType<{ components?: MdxComponents }>>();

function resolveMdxComponent(code: string) {
  const cached = mdxComponentCache.get(code);
  if (cached) {
    return cached;
  }

  const fn = new Function(code);
  const component = fn({ ...runtime }).default as ComponentType<{
    components?: MdxComponents;
  }>;
  mdxComponentCache.set(code, component);
  return component;
}

type MDXContentProps = {
  code: string;
  components?: MdxComponents;
};

export default function MDXContent({ code, components }: MDXContentProps) {
  const Component = resolveMdxComponent(code);

  return (
    <div className="prose-mdx">
      <Component components={{ ...sharedComponents, ...components }} />
    </div>
  );
}
