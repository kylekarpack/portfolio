import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { AppHeader } from "./AppHeader";

describe("AppHeader Component", () => {
  const component = render(
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>
  );

  test("should render our footer", () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <header
            class="header overflow-hidden print:hidden md:block closed"
          >
            <div
              class="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm"
            >
              <a
                class="header-logo ml-4 gap-2 px-4"
                href="/"
              >
                <img
                  alt="Kyle Karpack Logo"
                  data-nimg="1"
                  decoding="async"
                  height="32"
                  loading="eager"
                  src="/images/branding/logo.svg"
                  style="color: transparent;"
                  width="110"
                />
                <span
                  class="sr-only"
                >
                  Home
                </span>
              </a>
              <div
                class="flex-1"
              />
              <nav
                class="flex h-full flex-col md:flex-row"
              >
                <a
                  class="header-link"
                  href="/"
                >
                  Home
                </a>
                <a
                  class="header-link"
                  href="/about"
                >
                  About
                </a>
                <a
                  class="header-link"
                  href="/portfolio"
                >
                  Portfolio
                </a>
                <a
                  class="header-link"
                  href="/blog"
                >
                  Blog
                </a>
                <a
                  class="header-link"
                  href="/resume"
                >
                  Resume
                </a>
                <a
                  class="header-link"
                  href="/contact"
                >
                  Contact
                </a>
              </nav>
            </div>
          </header>
        </div>
      </body>
    `);
  });
});
