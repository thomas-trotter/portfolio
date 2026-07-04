import classNames from "classnames";

type DetailSidebarProps = {
  children: React.ReactNode;
  className?: string;
};

export default function DetailSidebar({
  children,
  className,
}: DetailSidebarProps) {
  return (
    <aside
      className={classNames(
        "w-full shrink-0 border-b border-border px-8 py-8",
        "md:sticky md:top-0 md:w-60 md:self-start md:border-b-0 md:border-r",
        className,
      )}
    >
      {children}
    </aside>
  );
}
