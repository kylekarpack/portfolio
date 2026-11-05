import { AppHero } from "../components/AppHero";
import { AppImage } from "../components/AppImage";
import { Wysiwyg } from "../components/Wysiwyg";

export interface BlogPostProps {
  title: string;
  description: string;
  publicationDate: string;
  previewImage?: string;
  contentHtml: string;
}

/** Blog post content, fully static — Markdown is rendered at build time. */
export const BlogPost = ({ title, publicationDate, previewImage, contentHtml }: BlogPostProps) => {
  const intl = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
  const img = previewImage ?? false;

  return (
    <>
      <div className="mb-12 block items-center gap-12 bg-white py-8 align-middle md:flex">
        <div className="px-4 xs:w-full">
          <div className="m-auto max-w-3xl">
            <AppHero
              className="h-auto py-8 text-left sm:py-12"
              highlight={title}
              copy={<div className="mt-4 text-base text-gray-500">{intl.format(new Date(publicationDate))}</div>}
              tag="h1"
              reverse
            />
          </div>
        </div>

        {img ? (
          <div className="px-4 overflow-hidden xs:w-full sm:w-full sm:text-center">
            <AppImage
              src={img}
              alt={title}
              width={600}
              height={400}
              loading="eager"
              className="mt-0 w-full xs:m-auto"
            />
          </div>
        ) : null}
      </div>
      <div className="relative m-auto max-w-3xl px-4 sm:px-3">
        <Wysiwyg html={contentHtml} />
      </div>
    </>
  );
};
