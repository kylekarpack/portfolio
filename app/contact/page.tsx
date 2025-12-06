import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";
import { SITE_AUTHOR, SITE_TITLE } from "@/config/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE_TITLE}`,
  description: `Contact ${SITE_AUTHOR}, a Software Engineer in Seattle, Washington`,
};

export default function ContactPage() {
  return <ContactContent />;
}
