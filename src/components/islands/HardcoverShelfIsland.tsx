import { HardcoverShelf } from "react-hardcover-shelf";

export interface HardcoverShelfIslandProps {
  variant: "about" | "reading";
  apiKey?: string;
  limit?: number;
  width?: number;
  groupBy?: "year";
}

/**
 * Bookshelf island hydrated with `client:visible` from the About/Reading
 * stubs. The "hardy" filter lives inside the island because function props
 * can't cross an island boundary.
 */
export const HardcoverShelfIsland = ({
  variant,
  apiKey,
  limit = 12,
  width = 100,
  groupBy,
}: HardcoverShelfIslandProps) => (
  <>
    {variant === "about" ? (
      <section className="bg-color-background-light py-8 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-0">
          <h2 className="my-4 text-xl md:text-3xl">Recently Read</h2>
          <HardcoverShelf
            apiKey={apiKey}
            displayOptions={{ hideDetails: true }}
            filter={(book: any) => !book.subtitle?.toLowerCase().includes("hardy")}
            limit={limit}
            userId="kylekarpack"
            width={width}
          />
          <a href="/about/reading">See more</a>
        </div>
      </section>
    ) : (
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-0 md:py-20">
        <style>{`.rgs-subtitle {
          font-size: 80%;
          opacity: 0.8;
        }`}</style>
        <h2 className="my-4 text-xl md:text-3xl">Reading</h2>
        <HardcoverShelf
          apiKey={apiKey}
          filter={(book: any) => !book.subtitle?.toLowerCase().includes("hardy")}
          groupBy={groupBy}
          limit={limit}
          userId="kylekarpack"
          width={width}
        />
      </div>
    )}
  </>
);
