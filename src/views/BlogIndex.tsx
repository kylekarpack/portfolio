import { AppHero } from "../components/AppHero";
import { AppImage } from "../components/AppImage";
import { Wysiwyg } from "../components/Wysiwyg";

export interface BlogIndexPost {
  slug: string;
  title: string;
  publicationDate: string;
  categories: string[];
  previewImage?: string;
  excerptHtml: string;
}

/** Blog listing content, fully static. */
export const BlogIndex = ({ posts }: { posts: BlogIndexPost[] }) => {
  const intl = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  const camelCaseToWords = (s: string) => {
    const result = s.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <section>
      <div className="border-0 border-b border-color-border bg-color-background-light text-color-background-dark">
        <AppHero className="py-12 md:py-10" highlight="Blog" tag="h1" reverse />
      </div>
      <div className="mx-auto md:max-w-3xl">
        <div className="p-4">
          {posts.map((node, index) => (
            <div className="my-20" key={node.slug}>
              <h2 className="mb-2 text-4xl">
                <a href={`/blog/${node.slug}`}>{node.title}</a>
              </h2>
              <div className="mb-4 text-sm italic text-gray-500">{intl.format(new Date(node.publicationDate))}</div>

              {node.previewImage ? (
                <a href={`/blog/${node.slug}`}>
                  <div className="mb-4 overflow-hidden">
                    <AppImage
                      src={node.previewImage}
                      alt={node.title}
                      width={800}
                      height={300}
                      background="auto"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="mx-auto mt-0 w-full shadow-md transition-all hover:scale-105 hover:opacity-90"
                    />
                  </div>
                </a>
              ) : null}
              {node.categories && node.categories.length > 0 ? (
                <div className="mb-4">
                  {node.categories.map((el) => (
                    <span
                      className="inset-ring inset-ring-gray-400/20 mr-2 inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400"
                      key={el}>
                      {camelCaseToWords(el)}
                    </span>
                  ))}
                </div>
              ) : null}

              <Wysiwyg html={node.excerptHtml} />
              <a href={`/blog/${node.slug}`}>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
