import type { ComponentType, ReactNode } from "react";

export type MdxComponentProps = {
  children?: ReactNode;
  href?: string;
  src?: string;
  alt?: string;
};

export type MdxComponents = Record<string, ComponentType<MdxComponentProps>>;
