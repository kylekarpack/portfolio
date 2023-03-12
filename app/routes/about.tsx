import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";
import { GoodreadsBookshelf } from "react-goodreads-shelf";
import { GithubContributions } from "react-github-graph";

export const meta: MetaFunction = (args) => {
  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      title: `About | ${SITE_TITLE}`,
    }),
  };
};

export default function () {
  return (
    <div className="relative">
      <section className="bg-color-background-light py-20 ">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <h2 className="my-4 text-xl md:text-3xl">About Me</h2>
          <div className="gap-10 md:flex">
            <div className="flex-1">
              <p>
                Thanks for checking out my site. I'm a software engineer based in Seattle. If you are looking to hire an
                experienced front-end developer, please check out my <Link to="/resume">resume</Link> and feel free to{" "}
                <Link to="/contact">contact me</Link> any time. Outside work, I enjoy hiking, soccer, cooking, reading,
                and spending time with family.
              </p>
            </div>
            <div className="flex-1">
              <img alt="Kyle in the Rockies" loading="eager" src="/images/assets/rockies.webp" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <GithubContributions
            username="kylekarpack"
            renderHeader={(header) => <h2 className="my-4 text-xl md:text-3xl">{header}</h2>}
          />
        </div>
      </section>

      <section className="bg-color-background-light py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <h2 className="my-4 text-xl md:text-3xl">Recently Read</h2>
          <GoodreadsBookshelf userId="63515611" limit={14} width={100} displayOptions={{ hideDetails: true }} />

          {/* <Link to="/about/reading">See more</Link> */}
        </div>
      </section>
    </div>
  );
}
