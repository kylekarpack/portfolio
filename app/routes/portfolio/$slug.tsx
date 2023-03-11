import Image, { GraphImageProp } from "@graphcms/react-image";
import type { MetaFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { AppHero } from "~/components/AppHero";
import { getMetaData } from "~/metadata";
import type { LoaderData } from "~/routes/api/portfolio/$slug";
import { loader as copyLoader } from "~/routes/api/portfolio/$slug";

export const loader = copyLoader; // Odd syntax fixes a routing bug that occurs if the loader is simply re-exported

export const meta: MetaFunction = (args) => {
  const image = args.data?.images[0]?.url ?? false;

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

  // Setup
  const img = data.images[0]?.url ?? false;
  const imageHandle = data.images[0]?.handle ?? false;

  const asset: GraphImageProp = {
    handle: imageHandle ?? "",
    width: 600,
    height: 400,
  };

  return (
    <>
      <div className="mb-12 block items-center gap-12 align-middle md:flex ">
        <div className="flex-1">
          <div className="m-auto max-w-3xl">
            <AppHero className="py-20" copy={data.description} highlight={data.title} tag="h1" />
          </div>
        </div>

        {img && (
          <div className="flex-1">
            <Image
              alt={data.title}
              image={asset}
              withWebp={true}
              transforms={["quality=value:50"]}
              maxWidth={600}
              className="mt-0 w-full"
            />
          </div>
        )}
      </div>
      <div className="relative m-auto flex max-w-3xl flex-col">
        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: data.content.html }} />
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
        <AppHero className="py-20 md:py-40" copy="Error: Not Found" highlight="404" tag="h1" />
      </section>
    );
  }

  throw new Error("Unexpected error");
};
