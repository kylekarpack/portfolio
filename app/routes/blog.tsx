import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { AppHero } from "~/components/AppHero";
import { AppWysiwyg } from "~/components/AppWysiwyg";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { getMetaData } from "~/metadata";
import type { LoaderData } from "~/routes/api/blog/route";
import { loader as copyLoader } from "~/routes/api/blog/route";

export const loader = copyLoader; // Odd syntax fixes a routing bug that occurs if the loader is simply re-exported

export const meta: MetaFunction = (args) => {
  return [
    {
      ...getMetaData({
        description: `The blog of ${SITE_AUTHOR}.`,
        title: `Blog | ${SITE_TITLE}`,
      }),
    },
  ];
};

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();
  const intl = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  return (
    <>
      <section>
        <div className="border-0 border-b border-t border-color-border bg-color-background-light text-color-background-dark">
          <AppHero className="py-12 md:py-10" copy="Recent writing" highlight="Blog" tag="h1" reverse />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="p-4">
            {data.map((node) => {
              let content = node.content.raw;
              let first = true;
              content.children = content.children.filter((el: any) => {
                const isPara = el.type === "paragraph";
                if (isPara) {
                  return first;
                }
                first = false;
                return false;
              });

              return (
                <div key={node.slug} className="my-20">
                  <h2 className="mb-4 text-4xl">
                    <Link to={`/blog/${node.slug}`}>{node.title}</Link>
                  </h2>
                  <div className="mb-4">{intl.format(new Date(node.publicationDate))}</div>
                  <AppWysiwyg content={content} />
                  <Link to={`/blog/${node.slug}`}>Read More</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
