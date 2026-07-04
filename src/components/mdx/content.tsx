import * as runtime from "react/jsx-runtime";
import type { ComponentType } from "react";
import type { MdxComponents } from "@/components/mdx/types";

const sharedComponents: Record<string, ComponentType> = {};

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default as ComponentType<{
    components?: Record<string, ComponentType>;
  }>;
}

type MDXContentProps = {
  code: string;
  components?: MdxComponents;
};

export default function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
}
