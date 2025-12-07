import classnames from "classnames";
import type { ReactElement } from "react";

export interface AppHeroProps {
  className?: string;
  copy?: string | ReactElement;
  highlight?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  reverse?: boolean;
}

export const AppHero = (props: AppHeroProps) => {
  const { className, copy, highlight, tag: Tag = "h2", reverse = false } = props;

  // Styles
  const cssComponent = classnames("hero p-4 text-center", className);

  return (
    <div className={cssComponent}>
      <Tag className={`flex text-xl font-extrabold md:text-4xl ${reverse ? "flex-col-reverse" : "flex-col"}`}>
        {copy && <div className="ext-base font-normal md:text-xl">{copy}</div>}
        {highlight && <div className="text-highlight px-3 text-4xl md:text-6xl">{highlight}</div>}
      </Tag>
    </div>
  );
};
