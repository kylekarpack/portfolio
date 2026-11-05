import { format } from "date-fns";
import type { Experience } from "../../data/resume";

const formatDate = (date: Date) => format(date, "MMM yyyy");

export interface SectionExperienceDetailProps {
  experience: Experience;
  hidden?: boolean;
}

/** Server-rendered experience entry, replacing the old `SectionExperienceDetail`. */
export const SectionExperienceDetail = ({ experience, hidden }: SectionExperienceDetailProps) => {
  const { company, companyUrl, description, highlights, roles } = experience;

  return (
    <div
      className="flex flex-col gap-6 md:flex-row"
      data-exp-more={hidden || undefined}
      hidden={hidden || undefined}>
      <div className="flex flex-col gap-2 text-base print:basis-8 md:basis-[180px]">
        <div className="flex">
          <h3 className="flex items-center gap-2 font-bold">
            <a
              aria-label={company}
              className="underline-offset-4 hover:underline print:text-color-copy-dark"
              dangerouslySetInnerHTML={{ __html: company }}
              href={companyUrl}
              rel="noreferrer"
              target="_blank"
            />
          </h3>
        </div>

        {roles.map((role) => (
          <h3 className="mb-2 text-xs font-medium" key={role.title}>
            <div className="mb-1 font-bold">{role.title}</div>
            <div className="text-color-copy-light">
              {formatDate(role.dateRange!.start)} - {role.dateRange?.end ? formatDate(role.dateRange.end) : "Present"}
            </div>
          </h3>
        ))}
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
