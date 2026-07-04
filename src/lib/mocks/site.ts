import { profileLinks, skills } from "@/lib/constants";

export const site = {
  name: "Thomas Trotter",
  tagline:
    "MSci AI student — aspiring ML / software engineer building thoughtful, well-crafted systems.",
  copyrightYear: 2026,
  skills: skills,
} as const;

export const topbarLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  ...profileLinks,
] as const;
