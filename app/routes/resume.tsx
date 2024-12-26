import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { AppSocialLink } from "~/components/AppSocialLink";
import GraphCmsImage from "~/components/GraphCmsImage";
import Mantra from "~/components/Mantra";
import { SectionEducation } from "~/components/SectionEducation";
import { SectionExperience } from "~/components/SectionExperience";
import { SectionProficiencies } from "~/components/SectionProficiencies";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { social } from "~/data/resume";
import { getMetaData } from "~/metadata";
import styles from "~/styles/resume.css?url";

export const links: LinksFunction = () => [
  {
    href: styles,
    media: "print",
    rel: "stylesheet",
  },
];

export const meta: MetaFunction = (args) => {
  return [
    {
      ...getMetaData({
        canonical: args.parentsData?.root?.canonical,
        description: `The resume of ${SITE_AUTHOR}, a Software Engineer in Seattle, Washington`,
        title: `Resume | ${SITE_TITLE}`,
      }),
    },
  ];
};

export default function () {
  return (
    <div className="m-auto max-w-5xl py-10 md:py-20">
      <div className="flex flex-col gap-12 px-4 md:flex-row lg:gap-20">
        <aside className="print:hidden md:w-1/5">
          <div className="sticky top-36">
            <div className="flex flex-row items-center justify-center gap-6 md:flex-col">
              <GraphCmsImage
                handle="9kiAYtliQPyl2fnEN1AL"
                alt={SITE_AUTHOR}
                className="rounded-full"
                outerWrapperClassName="custom-bg-gradient aspect-square w-full overflow-hidden p-1 rounded-full"
                loading="eager"
              />
              <div className="flex flex-shrink-0 flex-col gap-2 p-4">
                {social.map((data) => (
                  <AppSocialLink data={data} key={data.title} />
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4 print:hidden">
              <a
                className="ui-btn custom-bg-gradient block max-w-xs flex-1 whitespace-nowrap rounded-2xl px-4 py-2 text-center text-sm font-normal text-white"
                download={true}
                href="/resume/Kyle_Karpack_Resume.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </aside>

        <div className="resume-sections mb-20 flex flex-1 flex-col gap-10">
          <section>
            <h1 className="mb-2 text-2xl font-extrabold  sm:mb-10 md:text-4xl">
              <span className="sr-only">The resume of </span>
              {SITE_AUTHOR}
            </h1>
            <div className="mb-8 border-t border-solid border-color-border print:hidden" />
            <div className="flex items-center gap-10">
              <p>
                <Mantra />
              </p>
            </div>
          </section>
          <SectionExperience />
          <SectionProficiencies />
          <SectionEducation />
        </div>
      </div>
    </div>
  );
}
