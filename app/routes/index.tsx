import type { MetaFunction } from "@remix-run/node";

import { AppHero } from "~/components/AppHero";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { SectionTechnology } from "~/components/SectionTechnology";
import { SectionAmbitions } from "~/components/SectionAmbitions";
import { getMetaData } from "~/metadata";
import Mantra from "~/components/Mantra";
import { SectionProficiencies } from "~/components/SectionProficiencies";

export const meta: MetaFunction = (args) => {
  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      title: `${SITE_TITLE}`,
    }),
  };
};

export default function () {
  return (
    <>
      <div className="relative">
        <section className="relative z-0 m-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-4 py-8 md:flex-row md:py-12">
          <AppHero
            className="py-10 md:py-20 md:text-right"
            copy={
              <span className="whitespace-nowrap">
                Software Engineer in Seattle
              </span>
            }
            highlight={SITE_AUTHOR}
            tag="h1"
          />
          <div className="w-48">
            <img
              alt={SITE_AUTHOR}
              className="custom-bg-gradient mx-auto aspect-square max-h-32 overflow-hidden rounded-full p-1 transition-transform md:max-h-40"
              height="auto"
              loading="eager"
              src="/images/assets/headshot.jpg"
              width="auto"
            />
          </div>
        </section>
      </div>
      <section className="border-0 border-t border-b border-solid border-color-border bg-color-background-light px-8 text-color-background-dark md:px-0">
        <blockquote className="mx-auto my-20 max-w-4xl text-2xl font-normal md:my-40 md:text-3xl">
          <Mantra />
        </blockquote>
      </section>
      <SectionAmbitions />
      <section className="bg-color-background-dark py-20 text-color-background-light">
        <div className="mx-auto max-w-3xl px-4 pb-12 md:px-0">
          <SectionProficiencies />
        </div>
      </section>
    </>
  );
}
