export type Experience = {
  role: string;
  company: string;
  year: string;
  description: string;
};

export const about = {
  location: "[Location]",
  education: "MSci AI, [University]",
  availability: "Open to internships",
  cvHref: "/cv.pdf",
  intro: [
    "[A short intro paragraph — your background, what got you into AI/ML, and what you're looking for next.]",
    "[A second paragraph on interests, values, or what makes your approach distinct.]",
  ],
  skills: ["Python", "PyTorch", "React", "SQL", "AWS"],
  profileLinks: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  experience: [
    {
      role: "[Role]",
      company: "[Company]",
      year: "2025",
      description: "[Brief description of what you did and the impact.]",
    },
    {
      role: "[Role]",
      company: "[Company]",
      year: "2024",
      description: "[Brief description of what you did and the impact.]",
    },
  ],
} as const satisfies {
  location: string;
  education: string;
  availability: string;
  cvHref: string;
  intro: readonly string[];
  skills: readonly string[];
  profileLinks: readonly { label: string; href: string }[];
  experience: readonly Experience[];
};
