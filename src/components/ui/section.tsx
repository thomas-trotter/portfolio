import classNames from "classnames";

type SectionProps = {
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  centered = false,
  className,
  children,
}: SectionProps) {
  return (
    <section
      className={classNames(
        "px-6 py-[52px] md:px-11",
        centered && "text-center",
        className,
      )}
    >
      {children}
    </section>
  );
}
