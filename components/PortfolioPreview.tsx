import Link from "next/link";
import { format } from "date-fns";
import { AppImage } from "@/components/AppImage";
import type { Portfolio } from "@/types";

export interface PortfolioPreviewProps {
  hideDate: boolean;
  data: Portfolio;
}

/**
 * Preview a portfolio item
 */
export const PortfolioPreview = (props: PortfolioPreviewProps) => {
  const { hideDate: current = false, data } = props;

  // Setup
  const date = data.date ? new Date(data.date) : null;
  const imageSrc = data.images && data.images.length > 0 ? data.images[0] : "";

  return (
    <Link className="work-preview text-color-copy" href={`/portfolio/${data.slug}`}>
      {imageSrc && (
        <div className="w-full overflow-hidden">
          <AppImage
            alt={data.title}
            src={imageSrc}
            width={400}
            height={250}
            background="auto"
            loading="lazy"
            className="w-full border transition-all hover:scale-105 hover:opacity-90"
          />
        </div>
      )}

      <h3 className="mb-2 mt-4 font-font-serif text-xl font-bold transition-all duration-300">{data.title}</h3>
      {!current && date && (
        <div className="mb-2 mt-2 flex items-baseline gap-2 font-medium text-color-copy-light">
          <span>{format(date, "MMMM yyyy")}</span>
        </div>
      )}

      <p>{data.description}</p>
    </Link>
  );
};
