import type { MetaFunction } from "@remix-run/node";
import { AppHero } from "~/components/AppHero";
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
        <section className="relative z-0 m-auto  py-8 md:py-12">
          <div className="mx-auto flex max-w-2xl flex-col-reverse items-center justify-center gap-4 md:flex-row">
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
          </div>
          <div className="mx-auto max-w-3xl px-4 py-12 text-center text-lg md:px-0 md:text-xl">
            <Mantra />
          </div>
        </section>
      </div>

      <section className="bg-color-background-dark py-20 text-color-background-light">
        <div className="mx-auto max-w-3xl px-4 pb-12 md:px-0">
          <SectionProficiencies />
        </div>
      </section>

      <section className="bg-color-background-light py-20 ">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <h2 className="my-4 text-xl md:text-3xl">About Me</h2>
          <p>
            Thanks for checking out my site. I'm a software engineer based in
            Seattle. If you are looking to hire an experienced front-end
            developer, please check out my resume and feel free to contact me
            any time. Outside work, I enjoy hiking, soccer, cooking, reading,
            and spending time with family.
          </p>
        </div>
      </section>
    </>
  );
}
