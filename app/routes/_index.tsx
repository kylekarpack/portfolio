import type { MetaFunction } from "@remix-run/node";
import { AppHero } from "~/components/AppHero";
import GraphCmsImage from "~/components/GraphCmsImage";
import Mantra from "~/components/Mantra";
import { SectionProficiencies } from "~/components/SectionProficiencies";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";

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
        <section className="relative z-0 m-auto py-8 md:py-12">
          <div className="mx-auto flex max-w-2xl flex-col-reverse items-center justify-center gap-4 md:flex-row">
            <AppHero
              className="py-10 md:py-20 md:text-right"
              copy={<span className="whitespace-nowrap">Software Engineer in Seattle</span>}
              highlight={SITE_AUTHOR}
              tag="h1"
            />
            <div className="w-48">
              <GraphCmsImage
                handle="9kiAYtliQPyl2fnEN1AL"
                alt={SITE_AUTHOR}
                className="rounded-full"
                outerWrapperClassName="custom-bg-gradient mx-auto aspect-square w-full overflow-hidden p-1 rounded-full"
                loading="eager"
              />
            </div>
          </div>
          <div className="mx-auto max-w-3xl px-4 py-12 text-center text-lg md:px-0 md:text-xl">
            <Mantra />
          </div>
        </section>
      </div>

      <section className="bg-color-background-dark py-8 text-color-background-light md:py-20">
        <div className="mx-auto max-w-3xl px-8 pb-12 md:px-0">
          <SectionProficiencies />
        </div>
      </section>
    </>
  );
}
