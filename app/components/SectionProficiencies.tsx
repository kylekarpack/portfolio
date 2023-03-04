import { technologies } from "~/data/details";

export const SectionProficiencies = () => {
  return (
    <section>
      <div>
        <h2 className="py-8 text-lg print:py-4 md:text-xl">Proficiencies</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 p-1 text-sm print:grid-cols-3 md:grid-cols-2">
        {Object.keys(technologies).map((el) => (
          <div
            key={el}
            className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
            <h3 className="text-lg text-color-copy-light">{el}</h3>
            {technologies[el]?.join(", ")}
          </div>
        ))}
      </div>
    </section>
  );
};
