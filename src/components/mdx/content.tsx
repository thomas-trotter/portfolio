import type { ComponentType } from "react";
import { getMdxComponent } from "@/.velite/mdx-registry";
import type { MdxComponents } from "@/components/mdx/types";

const sharedComponents: Record<string, ComponentType> = {};
const mdxComponentCache = new Map<string, ReturnType<typeof getMdxComponent>>();

function resolveMdxComponent(mdxId: string) {
  const cached = mdxComponentCache.get(mdxId);
  if (cached) {
    return cached;
  }

  const component = getMdxComponent(mdxId);
  mdxComponentCache.set(mdxId, component);
  return component;
}

type MdxRendererProps = {
  mdxId: string;
  components?: MdxComponents;
};

function MdxRenderer({ mdxId, components }: MdxRendererProps) {
  const Component = resolveMdxComponent(mdxId);
  return <Component components={{ ...sharedComponents, ...components }} />;
}

type MDXContentProps = {
  mdxId: string;
  components?: MdxComponents;
};

export default function MDXContent({ mdxId, components }: MDXContentProps) {
  return (
    <div className="prose-mdx">
      <MdxRenderer mdxId={mdxId} components={components} />
    </div>
  );
}
