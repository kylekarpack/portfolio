import { Link } from "@remix-run/react";
import { format } from "date-fns";
import type { Portfolio } from "~/routes/api/portfolio/route";
import GraphCmsImage from "./GraphCmsImage";

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
  const date = new Date(data.date);

  const handle = data.images[0]?.handle ?? "";

  return (
    <Link className="work-preview text-color-copy" prefetch="intent" to={`/portfolio/${data.slug}`}>
      {handle && (
        <div className="w-full">
          <GraphCmsImage
            alt={data.title}
            handle={handle}
            width={400}
            height={250}
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
