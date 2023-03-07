import { format } from "date-fns";
import type { Experience } from "~/data/resume";

export interface SectionExperienceDetailProps {
  experience: Experience;
}

export const SectionExperienceDetail = (props: SectionExperienceDetailProps) => {
  const { experience } = props;
  const { company, companyUrl, dateRange, description, highlights, title } = experience;

  // Setup
  const [start, stop] = dateRange ?? [];

  return (
    <div className="flex flex-col gap-6 md:flex-row" key={title}>
      <div className="flex flex-col gap-2 text-base print:basis-8 md:basis-[160px]">
        <div className="flex">
          <h3 className="flex items-center gap-2 font-bold">
            <a
              className="underline-offset-4 hover:underline print:text-color-copy-dark"
              dangerouslySetInnerHTML={{ __html: company }}
              href={companyUrl}
              rel="noreferrer"
              target="_blank"
            />
          </h3>
        </div>
        <h3 className="text-xs font-medium">
          <div className="mb-1 font-bold">{title}</div>
          <div className="text-color-copy-light">
            {format(start!, "MMM yyyy")} - {stop ? format(stop, "MMM yyyy") : "Present"}
          </div>
        </h3>
      </div>

      <div className="flex-1 text-sm leading-4">
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <ul className="my-4 ml-4 list-disc text-sm font-light text-color-copy">
          {highlights.map((highlight, index) => (
            <li className="my-1" dangerouslySetInnerHTML={{ __html: highlight }} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
