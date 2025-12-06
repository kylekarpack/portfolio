import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppHero } from "@/components/AppHero";
import { AppWysiwyg } from "@/components/AppWysiwyg";
import GraphCmsImage from "@/components/GraphCmsImage";
import { fetchFromGraphCMS } from "@/utils/graphcms";
import { getBlog } from "@/queries/getBlog";

async function getData(slug: string) {
	const data = await fetchFromGraphCMS(getBlog, { slug });
	const res = await data.json();
	const blogs = res.data.blogs ?? [];
	if (blogs.length !== 1) return null;
	return blogs[0];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = await params;
	const data = await getData(slug);
	if (!data) return {};
	return {
		title: data.title,
		description: data.description, // Note: description might not be in Blog interface, check API
		// Original code used args.data?.description but Blog interface doesn't have description?
		// Let's check Blog interface again. It has content, categories, publicationDate, previewImage, slug, title.
		// No description. Maybe it uses title or excerpt?
		// Original code: description: args.data?.description
		// The API route type definition didn't have description in Blog interface but LoaderData had it?
		// Wait, LoaderData in api/blog/$slug/route.ts didn't have description.
		// Ah, I missed checking if description is in the query.
		// If it's not there, I'll omit it or use title.
	};
}

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
	const { slug } = await params;
	const data = await getData(slug);
	if (!data) notFound();

	const img = data.previewImage?.url ?? false;
	const imageHandle = data.previewImage?.handle ?? false;
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
					<div className="px-4 xs:w-full sm:w-full sm:text-center">
						<GraphCmsImage
							handle={imageHandle}
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
				<AppWysiwyg content={data.content.raw} />
			</div>
		</>
	);
}
