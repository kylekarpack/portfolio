import type { Social } from "../../data/resume";

export interface SocialLinkProps {
  data: Social;
}

export const SocialLink = ({ data }: SocialLinkProps) => (
  <a
    className="flex items-center gap-4 wrap-break-word break-all text-sm text-color-copy-light"
    href={data.url}
    rel="noopener noreferrer"
    target="_blank">
    <img alt={`Follow me on ${data.title}`} height={14} src={data.icon} width={14} />
    {data.title}
  </a>
);
