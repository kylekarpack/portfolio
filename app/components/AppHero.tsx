import classnames from "classnames";
import type { ReactElement } from "react";

export interface AppHeroProps {
  className?: string;
  copy?: string | ReactElement;
  highlight: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const AppHero = (props: AppHeroProps) => {
  const { className, copy, highlight, tag: Tag = "h2" } = props;

  // Styles
  const cssComponent = classnames("hero p-4 text-center", className);

  return (
    <div className={cssComponent}>
      <Tag className="inline-block text-xl font-extrabold md:text-4xl">
        {copy && <div className="ext-base font-normal md:text-xl">{copy}</div>}
        <div className="text-highlight px-3 text-4xl md:text-6xl">
          {highlight}
        </div>
      </Tag>
    </div>
  );
};
