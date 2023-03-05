import { useCatch, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/cloudflare";

import { AppHero } from "~/components/AppHero";
import { loader } from "~/routes/api/portfolio/$slug";
import type { LoaderData } from "~/routes/api/portfolio/$slug";
import { getMetaData } from "~/metadata";

export { loader };

export const meta: MetaFunction = (args) => {
  const image = args.data?.images?.[0] ? args.data?.images[0]?.url : false;

  return getMetaData({
    canonical: args.parentsData?.root?.canonical,
    description: args.data?.description,
    image,
    title: args.data?.title,
  });
};

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  console.log(data);

  // Setup
  const img = data.images?.[0] ? data.images[0]?.url : false;

  return (
    <>
      <div className="mb-12 block items-center gap-12 align-middle md:flex ">
        <div className="flex-1">
          <div className="m-auto max-w-3xl">
            <AppHero
              className="py-20"
              copy={data.description}
              highlight={data.title}
              tag="h1"
            />
          </div>
        </div>

        {img && (
          <div className="flex-1">
            <img
              alt={data.title}
              className="mt-0 w-full"
              height="auto"
              loading="eager"
              src={img}
              width="100%"
            />
          </div>
        )}
      </div>
      <div className="relative m-auto flex max-w-3xl flex-col">
        <div
          className="wysiwyg"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
      </div>
    </>
  );
}

export const CatchBoundary = () => {
  // Hooks
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <section className="mx-auto max-w-6xl">
        <AppHero
          className="py-20 md:py-40"
          copy="Error: Not Found"
          highlight="404"
          tag="h1"
        />
      </section>
    );
  }

  throw new Error("Unexpected error");
};
