import { useState } from "react";
import { experience as data } from "~/data/resume";
import { SectionExperienceDetail } from "./SectionExperienceDetail";

export const SectionExperience = () => {
  // Hooks
  const minValue = 4;
  const [shown, setShown] = useState(minValue);

  // Setup
  const experience = data.slice(0, shown);

  // Handlers
  const onToggleExp = () => {
    setShown(shown === minValue ? data.length : minValue);
  };

  return (
    <section>
      <div>
        <h2 className="py-2 text-lg print:py-4 sm:py-8 md:text-xl">Experience</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="flex flex-col gap-10">
        {experience.map((exp) => (
          <SectionExperienceDetail experience={exp} key={`${exp.company}/${exp.title}`} />
        ))}
      </div>
      {experience.length > shown && (
        <div className="print:hidden">
          <button
            className="ui-btn custom-bg-gradient m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs text-white"
            onClick={onToggleExp}>
            {shown === minValue ? "Show more" : "Show less"}
          </button>
        </div>
      )}
    </section>
  );
};
