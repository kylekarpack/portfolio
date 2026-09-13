import type { Metadata } from "next";
import Link from "next/link";
import { Image } from "@unpic/react";
import { AppHero } from "@/components/AppHero";
import { AppWysiwyg } from "@/components/AppWysiwyg";
import { SITE_AUTHOR, SITE_TITLE } from "@/config/constants";
import { getBlogs } from "@/lib/content";
import type { Blog } from "@/types";

export const metadata: Metadata = {
  title: `Blog | ${SITE_TITLE}`,
  description: `The blog of ${SITE_AUTHOR}.`,
};

export default async function BlogPage() {
  const data: Blog[] = await getBlogs();
  const intl = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  const camelCaseToWords = (s: string) => {
    const result = s.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <>
      <section>
        <div className="border-0 border-b border-color-border bg-color-background-light text-color-background-dark">
          <AppHero className="py-12 md:py-10" highlight="Blog" tag="h1" reverse />
        </div>
        <div className="mx-auto md:max-w-3xl">
          <div className="p-4">
            {data.map((node) => {
              const excerpt = node.description || (node.content.split("\n\n")[0] ?? node.content);

              return (
                <div key={node.slug} className="my-20">
                  <h2 className="mb-2 text-4xl">
                    <Link href={`/blog/${node.slug}`}>{node.title}</Link>
                  </h2>
                  <div className="mb-4 text-sm italic text-gray-500">{intl.format(new Date(node.publicationDate))}</div>

                  {node.previewImage && (
                    <Link href={`/blog/${node.slug}`}>
                      <div className="mb-4">
                        <Image
                          src={node.previewImage}
                          alt={node.title}
                          width={800}
                          height={300}
                          loading="eager"
                          background="auto"
                          className="mx-auto mt-0 w-full shadow-md transition-all hover:scale-105 hover:opacity-90"
                        />
                      </div>
                    </Link>
                  )}
                  {node.categories && node.categories.length > 0 && (
                    <div className="mb-4">
                      {node.categories.map((el) => (
                        <span
                          key={el}
                          className="inset-ring inset-ring-gray-400/20 mr-2 inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400">
                          {camelCaseToWords(el)}
                        </span>
                      ))}
                    </div>
                  )}

                  <AppWysiwyg content={excerpt} />
                  <Link href={`/blog/${node.slug}`}>Read More</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
