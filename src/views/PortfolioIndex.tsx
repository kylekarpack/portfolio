import { AppHero } from "../components/AppHero";
import { WorkPreview } from "../components/WorkPreview";
import type { Portfolio } from "../../types";

/** Portfolio listing content, fully static. */
export const PortfolioIndex = ({ items }: { items: Portfolio[] }) => {
  const current = items.filter((node) => node.portfolioItemType === "current");
  const past = items.filter((node) => node.portfolioItemType === "past");
  const student = items.filter((node) => node.portfolioItemType === "student");

  return (
    <>
      <section>
        <div className="border-0 border-b border-color-border bg-color-background-light text-color-background-dark">
          <AppHero className="py-12 md:py-10" copy="Current Work" highlight="Portfolio" tag="h1" reverse />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-8 grid grid-cols-1 gap-16 p-4 md:my-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {current.map((node) => (
              <WorkPreview hideDate={true} data={node} key={node.slug} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="border-0 border-b border-t border-color-border bg-color-background-light text-color-background-dark">
          <AppHero className="py-12 md:py-10" copy="Past Projects" tag="h1" />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {past.map((node) => (
              <WorkPreview hideDate={false} data={node} key={node.slug} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="border-0 border-b border-t border-color-border bg-color-background-light text-color-background-dark">
          <AppHero className="py-12 md:py-10" copy="Student / Intern Projects" tag="h1" />
        </div>
        <div className="mx-auto md:max-w-6xl">
          <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {student.map((node) => (
              <WorkPreview hideDate={true} data={node} key={node.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

