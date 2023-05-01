import Image, { GraphImageProp } from "@karpack/react-image";
import { Link } from "@remix-run/react";
import { format } from "date-fns";
import type { Portfolio } from "~/routes/api/portfolio/route";

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

  const asset: GraphImageProp = {
    handle: data.images[0]?.handle ?? "",
    width: 400,
    height: 250,
  };

  return (
    <Link className="work-preview text-color-copy" prefetch="intent" to={`/portfolio/${data.slug}`}>
      {asset.handle && (
        <div className="w-full">
          <Image
            alt={data.title}
            image={asset}
            withWebp={true}
            transforms={["quality=value:40"]}
            maxWidth={400}
            className="w-full border transition-all hover:scale-105 hover:opacity-90"
          />
        </div>
      )}

      <h3 className="mt-4 mb-2 font-font-serif text-xl font-bold transition-all duration-300">{data.title}</h3>
      {!current && date && (
        <div className="mt-2 mb-2 flex items-baseline gap-2 font-medium text-color-copy-light">
          <span>{format(date, "MMMM yyyy")}</span>
        </div>
      )}

      <p>{data.description}</p>
    </Link>
  );
};
