import classNames from "classnames";

type PlaceholderProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Placeholder({
  className,
  children,
}: PlaceholderProps) {
  return (
    <div className={classNames(
      "placeholder",
      className,
    )}>
      {children}
    </div>
  );
}
