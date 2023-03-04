import { FunctionComponent } from "react";
import { technologies } from "~/data/details";

export const SectionProficiencies: FunctionComponent<{ title?: string }> = ({
  title = "Skills",
}) => {
  return (
    <section>
      <div>
        <h2 className="py-8 text-lg print:py-4 md:text-xl">{title}</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 p-1 text-sm print:grid-cols-3 md:grid-cols-2">
        {Object.keys(technologies).map((el) => (
          <div key={el}>
            <h3 className="mb-2 text-base text-color-copy-light">{el}</h3>
            {technologies[el]?.join(", ")}
          </div>
        ))}
      </div>
    </section>
  );
};
