import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppHero } from "@/components/AppHero";
import { AppImage } from "@/components/AppImage";
import { AppWysiwyg } from "@/components/AppWysiwyg";
import { getBlogBySlug, getBlogs } from "@/lib/content";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  if (!data) {
    return {};
  }
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getBlogBySlug(slug);
  if (!data) {
    notFound();
  }

  const img = data.previewImage ?? false;
  const intl = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  return (
    <>
      <div className="mb-12 block items-center gap-12 bg-white py-8 align-middle md:flex">
        <div className="px-4 xs:w-full">
          <div className="m-auto max-w-3xl">
            <AppHero
              className="h-auto py-8 text-left sm:py-12"
              highlight={data.title}
              copy={<div className="mt-4 text-base text-gray-500">{intl.format(new Date(data.publicationDate))}</div>}
              tag="h1"
              reverse
            />
          </div>
        </div>

        {img && (
          <div className="px-4 overflow-hidden xs:w-full sm:w-full sm:text-center">
            <AppImage
              src={img}
              alt={data.title}
              width={600}
              height={400}
              loading="eager"
              className="mt-0 w-full xs:m-auto"
            />
          </div>
        )}
      </div>
      <div className="relative m-auto max-w-3xl px-4 sm:px-3">
        <AppWysiwyg content={data.content} />
      </div>
    </>
  );
}
