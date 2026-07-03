export const site = {
  name: "Thomas Trotter",
  tagline:
    "MSci AI student — aspiring ML / software engineer building thoughtful, well-crafted systems.",
  copyrightYear: 2026,
  skills: ["Python", "PyTorch", "React", "TypeScript", "SQL", "AWS"],
} as const;

export const topbarLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
] as const;
