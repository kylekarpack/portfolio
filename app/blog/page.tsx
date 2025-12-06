import type { Metadata } from "next";
import Link from "next/link";
import { AppHero } from "@/components/AppHero";
import { AppWysiwyg } from "@/components/AppWysiwyg";
import GraphCmsImage from "@/components/GraphCmsImage";
import { SITE_AUTHOR, SITE_TITLE } from "@/config/constants";
import { fetchFromGraphCMS } from "@/utils/graphcms";
import { getBlogs } from "@/queries/getBlogs";
import type { Blog } from "@/types";

export const metadata: Metadata = {
	title: `Blog | ${SITE_TITLE}`,
	description: `The blog of ${SITE_AUTHOR}.`,
};

async function getData() {
	const data = await fetchFromGraphCMS(getBlogs);
	const res = await data.json();
	return res.data.blogs ?? [];
}

export default async function BlogPage() {
	const data: Blog[] = await getData();
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
							let content = node.content.raw;
							// Clone content to avoid mutating original if needed, though here we just filter children
							// Deep clone might be needed if raw is reused, but for now shallow copy of children array
							const contentChildren = content.children.filter((el: any, index: number) => {
								// Logic from original: keep first paragraph? 
								// Original:
								// content.children = content.children.filter((el: any) => {
								//   const isPara = el.type === "paragraph";
								//   if (isPara && first) {
								//     first = false;
								//     return true;
								//   }
								//   return false;
								// });
								// This logic keeps ONLY the first paragraph.
								return el.type === "paragraph";
							});

							// Wait, the original logic was stateful inside map (first variable).
							// It keeps the FIRST paragraph found.
							let first = true;
							const filteredChildren = content.children.filter((el: any) => {
								const isPara = el.type === "paragraph";
								if (isPara && first) {
									first = false;
									return true;
								}
								return false;
							});

							const previewContent = { ...content, children: filteredChildren };

							return (
								<div key={node.slug} className="my-20">
									<h2 className="mb-2 text-4xl">
										<Link href={`/blog/${node.slug}`}>{node.title}</Link>
									</h2>
									<div className="mb-4 text-sm italic text-gray-500">{intl.format(new Date(node.publicationDate))}</div>

									{node.previewImage && (
										<Link href={`/blog/${node.slug}`}>
											<div className="mb-4">
												<GraphCmsImage
													handle={node.previewImage.handle}
													alt={node.title}
													width={800}
													height={300}
													loading="eager"
													className="mx-auto mt-0 w-full shadow-md transition-all hover:scale-105 hover:opacity-90"
												/>
											</div>
										</Link>
									)}
									{node.categories && (
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

									<AppWysiwyg content={previewContent} />
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
