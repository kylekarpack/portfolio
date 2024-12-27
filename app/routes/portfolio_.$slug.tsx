import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { AppHero } from "~/components/AppHero";
import GraphCmsImage from "~/components/GraphCmsImage";
import { getMetaData } from "~/metadata";
import type { LoaderData } from "~/routes/api/portfolio/$slug/route";
import { loader as copyLoader } from "~/routes/api/portfolio/$slug/route";

export const loader = copyLoader; // Odd syntax fixes a routing bug that occurs if the loader is simply re-exported

export const meta: MetaFunction = (args) => {
  const image = args.data?.images[0]?.url ?? false;

  return [
    getMetaData({
      canonical: args.parentsData?.root?.canonical,
      description: args.data?.description,
      image,
      title: args.data?.title,
    }),
  ];
};

export default function () {
  // Hooks
  const data = useLoaderData<LoaderData>();

  // Setup
  const img = data.images[0]?.url ?? false;
  const imageHandle = data.images[0]?.handle ?? false;

  return (
    <>
      <div className="mb-12 block items-center gap-12 bg-white align-middle sm:py-8 md:flex">
        <div className="flex-1 px-4">
          <div className="m-auto max-w-3xl">
            <AppHero className="py-12 sm:py-20" copy={data.description} highlight={data.title} tag="h1" reverse />
          </div>
        </div>

        {img && (
          <div className="flex-1 px-4">
            <GraphCmsImage
              handle={imageHandle}
              alt={data.title}
              width={600}
              height={400}
              loading="eager"
              className="mt-0 w-full"
            />
          </div>
        )}
      </div>
      <div className="relative m-auto max-w-3xl px-4 sm:px-0">
        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div>
    </>
  );
}

export const CatchBoundary = () => {
  // Hooks
  const error: any = useRouteError();

  if (error?.status === 404) {
    return (
      <section className="mx-auto max-w-6xl">
        <AppHero className="py-20 md:py-40" copy="Error: Not Found" highlight="404" tag="h1" />
      </section>
    );
  }

  throw new Error("Unexpected error");
};
