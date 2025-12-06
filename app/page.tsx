import type { Metadata } from "next";
import { AppHero } from "@/components/AppHero";
import GraphCmsImage from "@/components/GraphCmsImage";
import Mantra from "@/components/Mantra";
import { SectionProficiencies } from "@/components/SectionProficiencies";
import { SITE_AUTHOR, SITE_TITLE } from "@/config/constants";

export const metadata: Metadata = {
	title: SITE_TITLE,
};

export default function Home() {
	return (
		<>
			<div className="relative">
				<section className="relative z-0 m-auto py-8 md:py-12">
					<div className="mx-auto flex max-w-2xl flex-col-reverse items-center justify-center gap-4 md:flex-row">
						<AppHero
							className="py-10 md:py-20 md:text-right"
							copy={<span className="whitespace-nowrap">Software Engineer in Seattle</span>}
							highlight={SITE_AUTHOR}
							tag="h1"
						/>
						<div className="w-48">
							<div className="custom-bg-gradient mx-auto aspect-square w-full overflow-hidden rounded-full p-1">
								<GraphCmsImage
									handle="9kiAYtliQPyl2fnEN1AL"
									alt={SITE_AUTHOR}
									className="rounded-full"
									loading="eager"
									width={200}
									height={200}
								/>
							</div>
						</div>
					</div>
					<div className="mx-auto max-w-3xl px-4 py-12 text-center text-lg md:px-0 md:text-xl">
						<Mantra />
					</div>
				</section>
			</div>

			<section className="bg-color-background-dark py-8 text-color-background-light md:py-20">
				<div className="mx-auto max-w-3xl px-8 pb-12 md:px-0">
					<SectionProficiencies />
				</div>
			</section>
		</>
	);
}
