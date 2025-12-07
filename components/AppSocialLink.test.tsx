import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppSocialLink } from "./AppSocialLink";

describe("AppSocialLink Component", () => {
  const component = render(
    <AppSocialLink
      data={{
        icon: "/path/to/facebook.svg",
        title: "Facebook",
        url: "https://facebook.com",
      }}
    />
  );

  test("renders the facebook icon and link", () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <a
            class="flex items-center gap-4 break-words break-all text-sm text-color-copy-light"
            href="https://facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Follow me on Facebook"
              data-nimg="1"
              decoding="async"
              height="14"
              loading="lazy"
              src="/path/to/facebook.svg"
              style="color: transparent;"
              width="14"
            />
            Facebook
          </a>
        </div>
      </body>
    `);
  });
});
