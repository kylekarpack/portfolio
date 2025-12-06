import type { FunctionComponent } from "react";
import { technologies } from "@/data/details";

export const SectionProficiencies: FunctionComponent<{ title?: string }> = ({ title = "Skills" }) => {
  return (
    <section>
      <div>
        <h2 className="py-2 text-lg print:py-4 sm:py-8 md:text-xl">{title}</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 p-1 text-sm print:grid-cols-3 md:grid-cols-2">
        {Object.keys(technologies).map((el) => (
          <div key={el}>
            <h3 className="mb-2 text-base opacity-80">{el}</h3>
            {technologies[el]?.join(", ")}
          </div>
        ))}
      </div>
    </section>
  );
};
