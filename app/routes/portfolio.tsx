import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { LoaderData } from "~/routes/api/portfolio/route";
import { AppHero } from "~/components/AppHero";
import { PortfolioPreview } from "~/components/PortfolioPreview";
import { loader as copyLoader } from "~/routes/api/portfolio/route";
import { getMetaData } from "~/metadata";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";

export const loader = copyLoader; // Odd syntax fixes a routing bug that occurs if the loader is simply re-exported

export const meta: MetaFunction = (args) => {
  return {
    ...getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: `The portfolio of ${SITE_AUTHOR}.`,
      title: `Recent Work | ${SITE_TITLE}`,
    }),
  };
};

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const current = data.filter((node) => node.current);
  const recent = data.filter((node) => !node.current);

  return (
    <>
      <section>
        <div className="bg-color-background-dark text-color-background">
          <AppHero className="py-20 md:py-20" copy="Current Work" highlight="What I am Building" tag="h1" />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {current.map((node) => (
              <PortfolioPreview current={true} data={node as any} key={node.slug} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="border-0 border-t border-b border-color-border bg-color-background-light text-color-background-dark">
          <AppHero className="py-20 md:py-20" copy="Past Projects" highlight="What I Have Built" tag="h2" />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {recent.map((node) => (
              <PortfolioPreview current={false} data={node as any} key={node.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
