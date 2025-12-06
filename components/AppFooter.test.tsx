import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppFooter } from "./AppFooter";
import { MemoryRouter } from "react-router";

describe("AppFooter Component", () => {
  const component = render(
    <MemoryRouter>
      <AppFooter />
    </MemoryRouter>
  );

  test("should render our footer", () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <footer
            class="justify-center gap-2 py-10 text-center text-sm print:hidden md:py-20"
          >
            <div
              class="m-auto flex justify-center gap-4"
            >
              <a
                class="p-2"
                href="https://linkedin.com/in/kylekarpack"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="Follow me on LinkedIn"
                  class="footer-social"
                  height="16"
                  loading="lazy"
                  src="/images/svg/linkedin-dark.svg"
                  width="16"
                />
              </a>
              <a
                class="p-2"
                href="https://github.com/kylekarpack"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="Follow me on GitHub"
                  class="footer-social"
                  height="16"
                  loading="lazy"
                  src="/images/svg/github-dark.svg"
                  width="16"
                />
              </a>
            </div>
            <p
              class="text-color-copy-light"
            >
              © 
              2024
              , 
              Kyle Karpack
            </p>
          </footer>
        </div>
      </body>
    `);
  });
});
