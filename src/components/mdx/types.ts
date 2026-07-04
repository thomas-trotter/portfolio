import type { ComponentType, ReactNode } from "react";

export type MdxComponents = Record<
  string,
  ComponentType<{ children?: ReactNode }>
>;
