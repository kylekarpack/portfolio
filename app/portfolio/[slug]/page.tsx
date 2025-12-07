import { AppHero } from "@/components/AppHero";
import GraphCmsImage from "@/components/GraphCmsImage";
import { getPortfolioBySlug } from "@/queries/getPortfolio";
import { getPortfolios } from "@/queries/getPortfolios";
import { Portfolio } from "@/types";
import { fetchFromGraphCMS } from "@/utils/graphcms";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function getData(slug: string): Promise<Portfolio | null> {
  const data = await fetchFromGraphCMS<{ portfolios: Portfolio[] }>(getPortfolioBySlug, { slug });
  const portfolios = data.data?.portfolios ?? [];
  if (portfolios.length !== 1) {
    return null;
  }
  return portfolios[0];
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const { data } = await fetchFromGraphCMS<{ portfolios: Portfolio[] }>(getPortfolios);
  const portfolios = data?.portfolios ?? [];

  return portfolios.map((portfolio: { slug: string }) => ({
    slug: portfolio.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getData(slug);
  if (!data) {
    return {};
  }
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.images[0]?.url ? [data.images[0].url] : [],
    },
  };
}

export default async function PortfolioSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getData(slug);
  if (!data) {
    notFound();
  }

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
