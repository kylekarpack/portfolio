import classnames from "classnames";
import { useRef, useState } from "react";
import { technologies } from "~/data/details";

/**
 * @name SectionTechnology
 * @description Section with pills that toggles a bit more information
 */
export const SectionTechnology = () => {
  // Hooks
  const refDescription = useRef<HTMLQuoteElement>(null);
  const [heading, setHeading] = useState<string>();

  // Setup
  const keys = Object.keys(technologies).filter((key) => key !== "default");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-12 md:flex-row md:py-20">
      <div className="basis-2/5">
        <h2 className="mb-8 text-xl md:text-3xl">Technologies</h2>

        <div className="work-details flex flex-wrap gap-2">
          {keys.map((key) => {
            const active = key === heading;

            return (
              <button
                className={classnames(`rounded-md px-2 py-1 text-sm`, {
                  active,
                })}
                key={key}
                onClick={() => {
                  const newValue = heading === key ? undefined : key;
                  setHeading(newValue);
                }}
                type="button">
                {key}
              </button>
            );
          })}
        </div>
      </div>

      <blockquote
        className="my-8 basis-3/5 text-xl font-light leading-relaxed"
        ref={refDescription}>
        {technologies[heading!]?.join(", ")}
      </blockquote>
    </div>
  );
};
