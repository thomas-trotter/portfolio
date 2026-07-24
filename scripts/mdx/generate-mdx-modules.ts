import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { wrapMdxCode } from "./wrap-mdx-code";

const MDX_COLLECTIONS = ["blog", "projects", "pages"] as const;

type MdxEntry = {
  collection: (typeof MDX_COLLECTIONS)[number];
  slug: string;
  code: string;
};

function toImportName(key: string): string {
  return `Mdx_${key.replace(/[^a-zA-Z0-9]/g, "_")}`;
}

function collectMdxEntries(data: Record<string, unknown>): MdxEntry[] {
  const entries: MdxEntry[] = [];

  for (const collection of MDX_COLLECTIONS) {
    const items = data[collection];
    if (!Array.isArray(items)) {
      continue;
    }

    for (const item of items) {
      if (
        item &&
        typeof item === "object" &&
        "slug" in item &&
        "code" in item &&
        typeof item.slug === "string" &&
        typeof item.code === "string"
      ) {
        entries.push({ collection, slug: item.slug, code: item.code });
        delete item.code;
      }
    }
  }

  return entries;
}

export async function generateMdxModules(
  data: Record<string, unknown>,
  outputDir: string,
): Promise<void> {
  const mdxDir = join(outputDir, "mdx");
  await rm(mdxDir, { recursive: true, force: true });

  const entries = collectMdxEntries(data);
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const { collection, slug, code } of entries) {
    const key = `${collection}/${slug}`;
    const modulePath = join(mdxDir, collection, `${slug}.tsx`);

    await mkdir(dirname(modulePath), { recursive: true });
    await writeFile(modulePath, wrapMdxCode(code), "utf8");

    const importName = toImportName(key);
    imports.push(`import ${importName} from "./${collection}/${slug}";`);
    registryEntries.push(`  "${key}": ${importName},`);
  }

  const registry = `${imports.join("\n")}

import type { ComponentType } from "react";
import type { MdxComponents } from "@/components/mdx/types";

export type CompiledMdxComponent = ComponentType<{ components?: MdxComponents }>;

export const mdxComponents = {
${registryEntries.join("\n")}
} as const satisfies Record<string, CompiledMdxComponent>;

export type MdxComponentKey = keyof typeof mdxComponents;

export function getMdxComponent(key: MdxComponentKey): CompiledMdxComponent {
  return mdxComponents[key];
}
`;

  await mkdir(mdxDir, { recursive: true });
  await writeFile(join(mdxDir, "registry.ts"), registry, "utf8");
}
