import * as runtime from "react/jsx-runtime";
import type { ComponentType } from "react";
import type { MdxComponents } from "@/components/mdx/types";

type MdxComponent = ComponentType<{
  components?: Record<string, ComponentType>;
}>;

const sharedComponents: Record<string, ComponentType> = {};
const mdxComponentCache = new Map<string, MdxComponent>();

function getMDXComponent(code: string): MdxComponent {
  const cached = mdxComponentCache.get(code);
  if (cached) {
    return cached;
  }

  const fn = new Function(code);
  const component = fn({ ...runtime }).default as MdxComponent;
  mdxComponentCache.set(code, component);
  return component;
}

type MDXContentProps = {
  code: string;
  components?: MdxComponents;
};

export default function MDXContent({ code, components }: MDXContentProps) {
  const Component = getMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
}
