import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppHero } from "@/components/AppHero";
import { AppImage } from "@/components/AppImage";
import { AppWysiwyg } from "@/components/AppWysiwyg";
import { getPortfolioBySlug, getPortfolios } from "@/lib/content";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const portfolios = await getPortfolios();

  return portfolios.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPortfolioBySlug(slug);
  if (!data) {
    return {};
  }
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.images[0] ? [data.images[0]] : [],
    },
  };
}

export default async function PortfolioSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPortfolioBySlug(slug);
  if (!data) {
    notFound();
  }

  const img = data.images[0] ?? false;

  return (
    <>
      <div className="mb-12 block items-center gap-12 bg-white align-middle sm:py-8 md:flex">
        <div className="flex-1 px-4">
          <div className="m-auto max-w-3xl">
            <AppHero className="py-12 sm:py-20" copy={data.description} highlight={data.title} tag="h1" reverse />
          </div>
        </div>

        {img && (
          <div className="flex-1 overflow-hidden px-4">
            <AppImage src={img} alt={data.title} layout="fullWidth" loading="eager" className="mt-0 w-full" />
          </div>
        )}
      </div>
      <div className="relative m-auto max-w-3xl px-4 sm:px-0">
        <AppWysiwyg content={data.content} />
      </div>
    </>
  );
}
