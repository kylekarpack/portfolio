import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";
import { cloneElement, Suspense } from "react";
import GitHubCalendar from "react-github-calendar";
import { GoodreadsBookshelf } from "react-goodreads-shelf";
import { Tooltip as ReactTooltip } from "react-tooltip";
import reactTooltipStyles from "react-tooltip/dist/react-tooltip.css?url";
import { SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";

export const meta: MetaFunction = (args) => {
  return [
    {
      ...getMetaData({
        title: `About | ${SITE_TITLE}`,
      }),
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: reactTooltipStyles,
    },
  ];
};

export default function () {
  return (
    <div className="relative">
      <section className="smd:py-20 bg-color-background-light py-8">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-1">
              <h2 className="my-4 text-xl md:text-3xl">About Me</h2>

              <p>
                Thanks for checking out my site. I'm a software engineer based in Seattle. If you are looking to hire an
                experienced software engineering leader, please check out my <Link to="/resume">resume</Link> and feel
                free to <Link to="/contact">contact me</Link> any time. Outside work, I enjoy being outside, cooking,
                reading, fixing my old house, and spending time with family.
              </p>
            </div>
            <div className="flex-1">
              <Image
                alt="Kyle in the Rockies"
                loading="eager"
                width={800}
                height={600}
                src="/images/assets/rockies.webp"
                layout="constrained"
                background="auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <Suspense>
            <GitHubCalendar
              username="kylekarpack"
              year="last"
              colorScheme="light"
              hideColorLegend
              fontSize={12}
              renderBlock={(block, activity) =>
                cloneElement(block, {
                  "data-tooltip-id": "react-tooltip",
                  "data-tooltip-html": `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${
                    activity.date
                  }`,
                })
              }
            />
          </Suspense>
          <ReactTooltip id="react-tooltip" />
        </div>
      </section>

      <section className="bg-color-background-light py-8 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <h2 className="my-4 text-xl md:text-3xl">Recently Read</h2>
          <GoodreadsBookshelf
            userId="63515611"
            limit={12}
            width={100}
            displayOptions={{ hideDetails: true }}
            filter={(book) => !book.subtitle?.toLowerCase().includes("hardy")}
          />

          <Link to="/about/reading">See more</Link>
        </div>
      </section>
    </div>
  );
}
