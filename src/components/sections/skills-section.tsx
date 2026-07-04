import Pill from "@/components/ui/pill";
import Section from "@/components/ui/section";
import { site } from "@/lib/site";

export default function SkillsSection() {
  return (
    <Section className="pt-0 pb-[52px]">
      <h2 className="section-heading">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2.5">
        {site.skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </Section>
  );
}
