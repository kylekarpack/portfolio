import type { ReactNode } from "react";

export interface AppHeroProps {
  className?: string;
  copy?: ReactNode;
  highlight?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  reverse?: boolean;
}

export const AppHero = ({ className = "", copy, highlight, tag: Tag = "h2", reverse = false }: AppHeroProps) => (
  <div className={`hero p-4 text-center ${className}`.trim()}>
    <Tag className={`flex text-xl font-extrabold md:text-4xl ${reverse ? "flex-col-reverse" : "flex-col"}`.trim()}>
      {copy ? <div className="ext-base font-normal md:text-xl">{copy}</div> : null}
      {highlight ? <div className="text-highlight px-3 text-4xl md:text-6xl">{highlight}</div> : null}
    </Tag>
  </div>
);
