import { experience } from "../../data/resume";
import { SectionExperienceDetail } from "./SectionExperienceDetail";

const minValue = 4;

const expanderScript = `(function () {
  var toggle = document.querySelector("[data-exp-toggle]");
  var hiddenItems = document.querySelectorAll("[data-exp-more]");
  if (!toggle || !hiddenItems.length) return;
  var expanded = false;
  toggle.addEventListener("click", function () {
    expanded = !expanded;
    hiddenItems.forEach(function (item) {
      item.hidden = expanded ? false : true;
    });
    toggle.textContent = expanded ? "Show less" : "Show more";
  });
})();`;

/**
 * Experience list. The "show more" toggle is a few lines of vanilla JS
 * instead of a hydrated React island — entries beyond the first four are
 * statically hidden until expanded.
 */
export const SectionExperience = () => (
  <>
    <section>
      <div>
        <h2 className="py-2 text-lg print:py-4 sm:py-8 md:text-xl">Experience</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="flex flex-col gap-10">
        {experience.map((exp, index) => (
          <SectionExperienceDetail experience={exp} hidden={index >= minValue} key={`${exp.company}`} />
        ))}
      </div>
      {experience.length > minValue && (
        <div className="print:hidden">
          <button
            className="ui-btn custom-bg-gradient m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs text-white cursor-pointer"
            data-exp-toggle
            type="button">
            Show more
          </button>
        </div>
      )}
    </section>
    <script dangerouslySetInnerHTML={{ __html: expanderScript }} />
  </>
);
