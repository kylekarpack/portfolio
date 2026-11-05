import { AppImage } from "../components/AppImage";

/** About intro section; the calendar + shelf sections are separate islands. */
export const AboutIntro = () => (
  <div className="relative">
    <section className="smd:py-20 bg-color-background-light py-8">
      <div className="mx-auto max-w-3xl px-4 md:px-0">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex-1">
            <h2 className="my-4 text-xl md:text-3xl">About Me</h2>

            <p>
              Thanks for checking out my site. I&apos;m a software engineer based in Seattle. If you are looking to hire
              an experienced software engineering leader, please check out my <a href="/resume">resume</a> and feel
              free to <a href="/contact">contact me</a> any time. Outside work, I enjoy being outside, cooking, reading,
              fixing my old house, and spending time with family.
            </p>
          </div>
          <div className="flex-1">
            <AppImage
              alt="Kyle in the Rockies"
              loading="eager"
              width={800}
              height={600}
              src="/images/assets/rockies.webp"
              layout="constrained"
              background="auto"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);
