import Image, { GraphImageProp } from "@graphcms/react-image";
import { Link } from "@remix-run/react";
import { format } from "date-fns";
import type { Portfolio } from "~/routes/api/portfolio";

export interface PortfolioPreviewProps {
  current: boolean;
  data: Portfolio;
}

/**
 * @name PortfolioPreview
 * @description Unfortunately I don't have a ton of great imagery to work with
 * for all of these past projects so I need to try and focus on the content 🤔
 */
export const PortfolioPreview = (props: PortfolioPreviewProps) => {
  const { current = false, data } = props;

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

      <h3 className="mt-4 font-font-serif text-xl font-bold transition-all">{data.title}</h3>
      <div className="mt-2 mb-4 flex items-baseline gap-2 font-medium text-color-copy-light">
        {!current && date && <span>{format(date, "MMMM yyyy")}</span>}
      </div>

      <p>{data.description}</p>
    </Link>
  );
};
