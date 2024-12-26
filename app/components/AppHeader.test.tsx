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
            class="header hidden overflow-hidden print:hidden md:block closed"
          >
            <div
              class="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm"
            >
              <button
                class="header-logo ml-4 gap-2 px-4 md:hidden"
                title="Toggle menu"
                type="button"
              >
                <img
                  alt="Toggle Menu"
                  class="max-h-4"
                  height="16"
                  loading="eager"
                  src="/images/svg/menu.svg"
                  width="19"
                />
              </button>
              <div
                class="flex-1 md:hidden"
              />
              <a
                aria-current="page"
                class="header-logo ml-4 gap-2 px-4 active"
                data-discover="true"
                href="/"
              >
                <img
                  alt="Toggle Menu"
                  height="32"
                  loading="eager"
                  src="/images/branding/logo.svg"
                  style="height: 32px;"
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
                  aria-current="page"
                  class="header-link active"
                  data-discover="true"
                  href="/"
                >
                  Home
                </a>
                <a
                  class="header-link"
                  data-discover="true"
                  href="/about"
                >
                  About
                </a>
                <a
                  class="header-link"
                  data-discover="true"
                  href="/portfolio"
                >
                  Portfolio
                </a>
                <a
                  class="header-link"
                  data-discover="true"
                  href="/resume"
                >
                  Resume
                </a>
                <a
                  class="header-link"
                  data-discover="true"
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
