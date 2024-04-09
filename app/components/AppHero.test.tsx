import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppHero } from "./AppHero";

describe("AppHero Component", () => {
  const component = render(<AppHero copy="Test Copy" highlight="The HIGHLIGHT" tag="h2" />);

  test("should render our Hero", () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="hero p-4 text-center"
          >
            <h2
              class="flex text-xl font-extrabold md:text-4xl flex-col"
            >
              <div
                class="ext-base font-normal md:text-xl"
              >
                Test Copy
              </div>
              <div
                class="text-highlight px-3 text-4xl md:text-6xl"
              >
                The HIGHLIGHT
              </div>
            </h2>
          </div>
        </div>
      </body>
    `);
  });
});
