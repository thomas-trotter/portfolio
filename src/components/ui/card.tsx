import classNames from "classnames";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({
  className,
  children,
}: CardProps) {
  return (
    <div className={classNames(
      "card",
      className,
    )}>
      {children}
    </div>
  );
}
