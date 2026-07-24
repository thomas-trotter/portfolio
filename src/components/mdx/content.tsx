import type { ComponentType } from "react";
import type { MdxComponents } from "@/components/mdx/types";

const sharedComponents: Record<string, ComponentType> = {};

type MDXContentProps = {
  Component: ComponentType<{ components?: MdxComponents }>;
  components?: MdxComponents;
};

export default function MDXContent({ Component, components }: MDXContentProps) {
  const mergedComponents = { ...sharedComponents, ...components };

  return (
    <div className="prose-mdx">
      <Component components={mergedComponents} />
    </div>
  );
}
