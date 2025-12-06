import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { SITE_TITLE } from "@/config/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_TITLE}`,
};

export default function AboutPage() {
  return <AboutContent />;
}
