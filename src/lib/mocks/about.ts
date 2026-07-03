import { profileLinks, skills } from "@/lib/constants";

export type Experience = {
  role: string;
  company: string;
  year: string;
  description: string;
};

export const about = {
  photoSrc: "/headshot.png",
  location: "London, UK",
  education: "MSci AI, King's College London",
  availability: "Open to internships",
  cvHref: "/cv.pdf",
  intro: [
    "I'm an MSci Artificial Intelligence student at King's College London, drawn to AI/ML through building projects. I'm seeking a summer 2026 internship where I can contribute to real ML or software projects and learn from experienced engineers.",
    "I learn best by building. My flagship project is a production-ready FastAPI service for AI-powered object detection using the DETR transformer, with Docker, testing, and full documentation — plus smaller projects like a Connect4 AI. I care about shipping things properly, not just making them work",
  ],
  skills: skills,
  profileLinks: profileLinks,
  experience: [
    {
      role: "Lifeguarding & Receptionist",
      company: "Serco",
      year: "2022 - Present",
      description: "Monitored a 25m pool serving 50+ swimmers daily, working with a team of 5+ lifeguards to enforce safety rules and proactively address hazards. Certified in first aid, CPR, and water rescue, with monthly training to maintain readiness.",
    },
  ],
} as const satisfies {
  photoSrc: string;
  location: string;
  education: string;
  availability: string;
  cvHref: string;
  intro: readonly string[];
  skills: readonly string[];
  profileLinks: readonly { label: string; href: string }[];
  experience: readonly Experience[];
};
