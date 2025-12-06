import type { Metadata } from "next";
import { ReadingContent } from "@/components/ReadingContent";
import { SITE_TITLE } from "@/config/constants";

export const metadata: Metadata = {
	title: `Reading | ${SITE_TITLE}`,
};

export default function ReadingPage() {
	return <ReadingContent />;
}
